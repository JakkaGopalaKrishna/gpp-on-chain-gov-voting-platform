// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";

contract MyGovernor is
    Governor,
    GovernorVotes,
    GovernorVotesQuorumFraction,
    GovernorCountingSimple
{
    enum VotingType { Standard, Quadratic }

    uint256 public proposalThresholdTokens = 1000e18;

    mapping(uint256 => VotingType) public proposalVotingType;
    mapping(uint256 => mapping(address => uint256)) public qvSpent;

    constructor(IVotes _token)
        Governor("MyGovernor")
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(10)
    {}

    function votingDelay() public pure override returns (uint256) {
        return 1;
    }

    function votingPeriod() public pure override returns (uint256) {
        return 45818;
    }

    function proposalThreshold() public view override returns (uint256) {
        return proposalThresholdTokens;
    }

    function proposeWithType(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        string memory description,
        VotingType votingType
    ) public returns (uint256) {
        uint256 id = propose(targets, values, calldatas, description);
        proposalVotingType[id] = votingType;
        return id;
    }

    function _countVote(
        uint256 proposalId,
        address account,
        uint8 support,
        uint256 weight,
        bytes memory
    ) internal override(Governor, GovernorCountingSimple) {

        if (proposalVotingType[proposalId] == VotingType.Standard) {
            super._countVote(proposalId, account, support, weight, "");
        } else {
            uint256 votes = sqrt(weight);
            uint256 cost = votes * votes;

            require(qvSpent[proposalId][account] + cost <= weight,
                "QV: insufficient power");

            qvSpent[proposalId][account] += cost;
            super._countVote(proposalId, account, support, votes, "");
        }
    }

    function quorum(uint256 blockNumber)
        public
        view
        override(IGovernor, GovernorVotesQuorumFraction)
        returns (uint256)
    {
        return super.quorum(blockNumber);
    }

    function sqrt(uint256 x) internal pure returns (uint256 y) {
        uint256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }
}
