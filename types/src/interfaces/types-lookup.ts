// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, Bytes, Compact, Enum, Null, Option, Result, Set, Struct, Text, U256, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { AccountId32, Call, H160, H256, MultiAddress, PerU16, Perbill, Percent, Permill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
    readonly flags: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (8) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (9) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (14) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (16) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (19) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (21) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportDispatchDispatchInfo (22) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (23) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (24) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (25) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly isRootNotAllowed: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed';
  }

  /** @name SpRuntimeModuleError (26) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (27) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly isBlocked: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
  }

  /** @name SpArithmeticArithmeticError (28) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (29) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletSudoEvent (30) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>;
    } & Struct;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name PalletBalancesEvent (34) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSuspended: boolean;
    readonly asSuspended: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRestored: boolean;
    readonly asRestored: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgraded: boolean;
    readonly asUpgraded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly amount: u128;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (35) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (36) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletGrandpaEvent (37) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpConsensusGrandpaAppPublic (40) */
  interface SpConsensusGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (41) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletIndicesEvent (42) */
  interface PalletIndicesEvent extends Enum {
    readonly isIndexAssigned: boolean;
    readonly asIndexAssigned: {
      readonly who: AccountId32;
      readonly index: u32;
    } & Struct;
    readonly isIndexFreed: boolean;
    readonly asIndexFreed: {
      readonly index: u32;
    } & Struct;
    readonly isIndexFrozen: boolean;
    readonly asIndexFrozen: {
      readonly index: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'IndexAssigned' | 'IndexFreed' | 'IndexFrozen';
  }

  /** @name PalletDemocracyEvent (43) */
  interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isTabled: boolean;
    readonly asTabled: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isExternalTabled: boolean;
    readonly isStarted: boolean;
    readonly asStarted: {
      readonly refIndex: u32;
      readonly threshold: PalletDemocracyVoteThreshold;
    } & Struct;
    readonly isPassed: boolean;
    readonly asPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isNotPassed: boolean;
    readonly asNotPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly refIndex: u32;
    } & Struct;
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly who: AccountId32;
      readonly target: AccountId32;
    } & Struct;
    readonly isUndelegated: boolean;
    readonly asUndelegated: {
      readonly account: AccountId32;
    } & Struct;
    readonly isVetoed: boolean;
    readonly asVetoed: {
      readonly who: AccountId32;
      readonly proposalHash: H256;
      readonly until: u64;
    } & Struct;
    readonly isBlacklisted: boolean;
    readonly asBlacklisted: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly voter: AccountId32;
      readonly refIndex: u32;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isSeconded: boolean;
    readonly asSeconded: {
      readonly seconder: AccountId32;
      readonly propIndex: u32;
    } & Struct;
    readonly isProposalCanceled: boolean;
    readonly asProposalCanceled: {
      readonly propIndex: u32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataTransferred: boolean;
    readonly asMetadataTransferred: {
      readonly prevOwner: PalletDemocracyMetadataOwner;
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled' | 'MetadataSet' | 'MetadataCleared' | 'MetadataTransferred';
  }

  /** @name PalletDemocracyVoteThreshold (44) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (45) */
  interface PalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split';
  }

  /** @name PalletDemocracyMetadataOwner (47) */
  interface PalletDemocracyMetadataOwner extends Enum {
    readonly isExternal: boolean;
    readonly isProposal: boolean;
    readonly asProposal: u32;
    readonly isReferendum: boolean;
    readonly asReferendum: u32;
    readonly type: 'External' | 'Proposal' | 'Referendum';
  }

  /** @name PalletCollectiveEvent (48) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: AccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: AccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name PalletVestingEvent (50) */
  interface PalletVestingEvent extends Enum {
    readonly isVestingUpdated: boolean;
    readonly asVestingUpdated: {
      readonly account: AccountId32;
      readonly unvested: u128;
    } & Struct;
    readonly isVestingCompleted: boolean;
    readonly asVestingCompleted: {
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'VestingUpdated' | 'VestingCompleted';
  }

  /** @name PalletElectionsPhragmenEvent (51) */
  interface PalletElectionsPhragmenEvent extends Enum {
    readonly isNewTerm: boolean;
    readonly asNewTerm: {
      readonly newMembers: Vec<ITuple<[AccountId32, u128]>>;
    } & Struct;
    readonly isEmptyTerm: boolean;
    readonly isElectionError: boolean;
    readonly isMemberKicked: boolean;
    readonly asMemberKicked: {
      readonly member: AccountId32;
    } & Struct;
    readonly isRenounced: boolean;
    readonly asRenounced: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isCandidateSlashed: boolean;
    readonly asCandidateSlashed: {
      readonly candidate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSeatHolderSlashed: boolean;
    readonly asSeatHolderSlashed: {
      readonly seatHolder: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'NewTerm' | 'EmptyTerm' | 'ElectionError' | 'MemberKicked' | 'Renounced' | 'CandidateSlashed' | 'SeatHolderSlashed';
  }

  /** @name PalletElectionProviderMultiPhaseEvent (54) */
  interface PalletElectionProviderMultiPhaseEvent extends Enum {
    readonly isSolutionStored: boolean;
    readonly asSolutionStored: {
      readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
      readonly origin: Option<AccountId32>;
      readonly prevEjected: bool;
    } & Struct;
    readonly isElectionFinalized: boolean;
    readonly asElectionFinalized: {
      readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
      readonly score: SpNposElectionsElectionScore;
    } & Struct;
    readonly isElectionFailed: boolean;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly account: AccountId32;
      readonly value: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly account: AccountId32;
      readonly value: u128;
    } & Struct;
    readonly isPhaseTransitioned: boolean;
    readonly asPhaseTransitioned: {
      readonly from: PalletElectionProviderMultiPhasePhase;
      readonly to: PalletElectionProviderMultiPhasePhase;
      readonly round: u32;
    } & Struct;
    readonly type: 'SolutionStored' | 'ElectionFinalized' | 'ElectionFailed' | 'Rewarded' | 'Slashed' | 'PhaseTransitioned';
  }

  /** @name PalletElectionProviderMultiPhaseElectionCompute (55) */
  interface PalletElectionProviderMultiPhaseElectionCompute extends Enum {
    readonly isOnChain: boolean;
    readonly isSigned: boolean;
    readonly isUnsigned: boolean;
    readonly isFallback: boolean;
    readonly isEmergency: boolean;
    readonly type: 'OnChain' | 'Signed' | 'Unsigned' | 'Fallback' | 'Emergency';
  }

  /** @name SpNposElectionsElectionScore (56) */
  interface SpNposElectionsElectionScore extends Struct {
    readonly minimalStake: u128;
    readonly sumStake: u128;
    readonly sumStakeSquared: u128;
  }

  /** @name PalletElectionProviderMultiPhasePhase (57) */
  interface PalletElectionProviderMultiPhasePhase extends Enum {
    readonly isOff: boolean;
    readonly isSigned: boolean;
    readonly isUnsigned: boolean;
    readonly asUnsigned: ITuple<[bool, u64]>;
    readonly isEmergency: boolean;
    readonly type: 'Off' | 'Signed' | 'Unsigned' | 'Emergency';
  }

  /** @name PalletStakingPalletEvent (59) */
  interface PalletStakingPalletEvent extends Enum {
    readonly isEraPaid: boolean;
    readonly asEraPaid: {
      readonly eraIndex: u32;
      readonly validatorPayout: u128;
      readonly remainder: u128;
    } & Struct;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly staker: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashReported: boolean;
    readonly asSlashReported: {
      readonly validator: AccountId32;
      readonly fraction: Perbill;
      readonly slashEra: u32;
    } & Struct;
    readonly isOldSlashingReportDiscarded: boolean;
    readonly asOldSlashingReportDiscarded: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly isStakersElected: boolean;
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnbonded: boolean;
    readonly asUnbonded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isKicked: boolean;
    readonly asKicked: {
      readonly nominator: AccountId32;
      readonly stash: AccountId32;
    } & Struct;
    readonly isStakingElectionFailed: boolean;
    readonly isChilled: boolean;
    readonly asChilled: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isPayoutStarted: boolean;
    readonly asPayoutStarted: {
      readonly eraIndex: u32;
      readonly validatorStash: AccountId32;
    } & Struct;
    readonly isValidatorPrefsSet: boolean;
    readonly asValidatorPrefsSet: {
      readonly stash: AccountId32;
      readonly prefs: PalletStakingValidatorPrefs;
    } & Struct;
    readonly isSnapshotVotersSizeExceeded: boolean;
    readonly asSnapshotVotersSizeExceeded: {
      readonly size_: u32;
    } & Struct;
    readonly isSnapshotTargetsSizeExceeded: boolean;
    readonly asSnapshotTargetsSizeExceeded: {
      readonly size_: u32;
    } & Struct;
    readonly isForceEra: boolean;
    readonly asForceEra: {
      readonly mode: PalletStakingForcing;
    } & Struct;
    readonly type: 'EraPaid' | 'Rewarded' | 'Slashed' | 'SlashReported' | 'OldSlashingReportDiscarded' | 'StakersElected' | 'Bonded' | 'Unbonded' | 'Withdrawn' | 'Kicked' | 'StakingElectionFailed' | 'Chilled' | 'PayoutStarted' | 'ValidatorPrefsSet' | 'SnapshotVotersSizeExceeded' | 'SnapshotTargetsSizeExceeded' | 'ForceEra';
  }

  /** @name PalletStakingValidatorPrefs (61) */
  interface PalletStakingValidatorPrefs extends Struct {
    readonly commission: Compact<Perbill>;
    readonly blocked: bool;
  }

  /** @name PalletStakingForcing (63) */
  interface PalletStakingForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly isForceNone: boolean;
    readonly isForceAlways: boolean;
    readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
  }

  /** @name PalletSessionEvent (64) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name PalletTreasuryEvent (65) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
    } & Struct;
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposalIndex: u32;
      readonly slashed: u128;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isUpdatedInactive: boolean;
    readonly asUpdatedInactive: {
      readonly reactivated: u128;
      readonly deactivated: u128;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive';
  }

  /** @name PalletBountiesEvent (66) */
  interface PalletBountiesEvent extends Enum {
    readonly isBountyProposed: boolean;
    readonly asBountyProposed: {
      readonly index: u32;
    } & Struct;
    readonly isBountyRejected: boolean;
    readonly asBountyRejected: {
      readonly index: u32;
      readonly bond: u128;
    } & Struct;
    readonly isBountyBecameActive: boolean;
    readonly asBountyBecameActive: {
      readonly index: u32;
    } & Struct;
    readonly isBountyAwarded: boolean;
    readonly asBountyAwarded: {
      readonly index: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyClaimed: boolean;
    readonly asBountyClaimed: {
      readonly index: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyCanceled: boolean;
    readonly asBountyCanceled: {
      readonly index: u32;
    } & Struct;
    readonly isBountyExtended: boolean;
    readonly asBountyExtended: {
      readonly index: u32;
    } & Struct;
    readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended';
  }

  /** @name PalletChildBountiesEvent (67) */
  interface PalletChildBountiesEvent extends Enum {
    readonly isAdded: boolean;
    readonly asAdded: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly index: u32;
      readonly childIndex: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly index: u32;
      readonly childIndex: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly type: 'Added' | 'Awarded' | 'Claimed' | 'Canceled';
  }

  /** @name PalletBagsListEvent (68) */
  interface PalletBagsListEvent extends Enum {
    readonly isRebagged: boolean;
    readonly asRebagged: {
      readonly who: AccountId32;
      readonly from: u64;
      readonly to: u64;
    } & Struct;
    readonly isScoreUpdated: boolean;
    readonly asScoreUpdated: {
      readonly who: AccountId32;
      readonly newScore: u64;
    } & Struct;
    readonly type: 'Rebagged' | 'ScoreUpdated';
  }

  /** @name PalletNominationPoolsEvent (69) */
  interface PalletNominationPoolsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly depositor: AccountId32;
      readonly poolId: u32;
    } & Struct;
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly member: AccountId32;
      readonly poolId: u32;
      readonly bonded: u128;
      readonly joined: bool;
    } & Struct;
    readonly isPaidOut: boolean;
    readonly asPaidOut: {
      readonly member: AccountId32;
      readonly poolId: u32;
      readonly payout: u128;
    } & Struct;
    readonly isUnbonded: boolean;
    readonly asUnbonded: {
      readonly member: AccountId32;
      readonly poolId: u32;
      readonly balance: u128;
      readonly points: u128;
      readonly era: u32;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly member: AccountId32;
      readonly poolId: u32;
      readonly balance: u128;
      readonly points: u128;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly poolId: u32;
    } & Struct;
    readonly isStateChanged: boolean;
    readonly asStateChanged: {
      readonly poolId: u32;
      readonly newState: PalletNominationPoolsPoolState;
    } & Struct;
    readonly isMemberRemoved: boolean;
    readonly asMemberRemoved: {
      readonly poolId: u32;
      readonly member: AccountId32;
    } & Struct;
    readonly isRolesUpdated: boolean;
    readonly asRolesUpdated: {
      readonly root: Option<AccountId32>;
      readonly bouncer: Option<AccountId32>;
      readonly nominator: Option<AccountId32>;
    } & Struct;
    readonly isPoolSlashed: boolean;
    readonly asPoolSlashed: {
      readonly poolId: u32;
      readonly balance: u128;
    } & Struct;
    readonly isUnbondingPoolSlashed: boolean;
    readonly asUnbondingPoolSlashed: {
      readonly poolId: u32;
      readonly era: u32;
      readonly balance: u128;
    } & Struct;
    readonly isPoolCommissionUpdated: boolean;
    readonly asPoolCommissionUpdated: {
      readonly poolId: u32;
      readonly current: Option<ITuple<[Perbill, AccountId32]>>;
    } & Struct;
    readonly isPoolMaxCommissionUpdated: boolean;
    readonly asPoolMaxCommissionUpdated: {
      readonly poolId: u32;
      readonly maxCommission: Perbill;
    } & Struct;
    readonly isPoolCommissionChangeRateUpdated: boolean;
    readonly asPoolCommissionChangeRateUpdated: {
      readonly poolId: u32;
      readonly changeRate: PalletNominationPoolsCommissionChangeRate;
    } & Struct;
    readonly isPoolCommissionClaimed: boolean;
    readonly asPoolCommissionClaimed: {
      readonly poolId: u32;
      readonly commission: u128;
    } & Struct;
    readonly type: 'Created' | 'Bonded' | 'PaidOut' | 'Unbonded' | 'Withdrawn' | 'Destroyed' | 'StateChanged' | 'MemberRemoved' | 'RolesUpdated' | 'PoolSlashed' | 'UnbondingPoolSlashed' | 'PoolCommissionUpdated' | 'PoolMaxCommissionUpdated' | 'PoolCommissionChangeRateUpdated' | 'PoolCommissionClaimed';
  }

  /** @name PalletNominationPoolsPoolState (70) */
  interface PalletNominationPoolsPoolState extends Enum {
    readonly isOpen: boolean;
    readonly isBlocked: boolean;
    readonly isDestroying: boolean;
    readonly type: 'Open' | 'Blocked' | 'Destroying';
  }

  /** @name PalletNominationPoolsCommissionChangeRate (73) */
  interface PalletNominationPoolsCommissionChangeRate extends Struct {
    readonly maxIncrease: Perbill;
    readonly minDelay: u64;
  }

  /** @name PalletSchedulerEvent (74) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u64;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u64;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<U8aFixed>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isCallUnavailable: boolean;
    readonly asCallUnavailable: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPeriodicFailed: boolean;
    readonly asPeriodicFailed: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPermanentlyOverweight: boolean;
    readonly asPermanentlyOverweight: {
      readonly task: ITuple<[u64, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallUnavailable' | 'PeriodicFailed' | 'PermanentlyOverweight';
  }

  /** @name PalletPreimageEvent (77) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name PalletOffencesEvent (78) */
  interface PalletOffencesEvent extends Enum {
    readonly isOffence: boolean;
    readonly asOffence: {
      readonly kind: U8aFixed;
      readonly timeslot: Bytes;
    } & Struct;
    readonly type: 'Offence';
  }

  /** @name PalletTransactionPauseModuleEvent (80) */
  interface PalletTransactionPauseModuleEvent extends Enum {
    readonly isTransactionPaused: boolean;
    readonly asTransactionPaused: {
      readonly palletNameBytes: Bytes;
      readonly functionNameBytes: Bytes;
    } & Struct;
    readonly isTransactionUnpaused: boolean;
    readonly asTransactionUnpaused: {
      readonly palletNameBytes: Bytes;
      readonly functionNameBytes: Bytes;
    } & Struct;
    readonly type: 'TransactionPaused' | 'TransactionUnpaused';
  }

  /** @name PalletImOnlineEvent (81) */
  interface PalletImOnlineEvent extends Enum {
    readonly isHeartbeatReceived: boolean;
    readonly asHeartbeatReceived: {
      readonly authorityId: PalletImOnlineSr25519AppSr25519Public;
    } & Struct;
    readonly isAllGood: boolean;
    readonly isSomeOffline: boolean;
    readonly asSomeOffline: {
      readonly offline: Vec<ITuple<[AccountId32, PalletStakingExposure]>>;
    } & Struct;
    readonly type: 'HeartbeatReceived' | 'AllGood' | 'SomeOffline';
  }

  /** @name PalletImOnlineSr25519AppSr25519Public (82) */
  interface PalletImOnlineSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (83) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PalletStakingExposure (86) */
  interface PalletStakingExposure extends Struct {
    readonly total: Compact<u128>;
    readonly own: Compact<u128>;
    readonly others: Vec<PalletStakingIndividualExposure>;
  }

  /** @name PalletStakingIndividualExposure (89) */
  interface PalletStakingIndividualExposure extends Struct {
    readonly who: AccountId32;
    readonly value: Compact<u128>;
  }

  /** @name PalletIdentityEvent (90) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
  }

  /** @name PalletUtilityEvent (91) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletEthereumEvent (92) */
  interface PalletEthereumEvent extends Enum {
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly from: H160;
      readonly to: H160;
      readonly transactionHash: H256;
      readonly exitReason: EvmCoreErrorExitReason;
      readonly extraData: Bytes;
    } & Struct;
    readonly type: 'Executed';
  }

  /** @name EvmCoreErrorExitReason (95) */
  interface EvmCoreErrorExitReason extends Enum {
    readonly isSucceed: boolean;
    readonly asSucceed: EvmCoreErrorExitSucceed;
    readonly isError: boolean;
    readonly asError: EvmCoreErrorExitError;
    readonly isRevert: boolean;
    readonly asRevert: EvmCoreErrorExitRevert;
    readonly isFatal: boolean;
    readonly asFatal: EvmCoreErrorExitFatal;
    readonly type: 'Succeed' | 'Error' | 'Revert' | 'Fatal';
  }

  /** @name EvmCoreErrorExitSucceed (96) */
  interface EvmCoreErrorExitSucceed extends Enum {
    readonly isStopped: boolean;
    readonly isReturned: boolean;
    readonly isSuicided: boolean;
    readonly type: 'Stopped' | 'Returned' | 'Suicided';
  }

  /** @name EvmCoreErrorExitError (97) */
  interface EvmCoreErrorExitError extends Enum {
    readonly isStackUnderflow: boolean;
    readonly isStackOverflow: boolean;
    readonly isInvalidJump: boolean;
    readonly isInvalidRange: boolean;
    readonly isDesignatedInvalid: boolean;
    readonly isCallTooDeep: boolean;
    readonly isCreateCollision: boolean;
    readonly isCreateContractLimit: boolean;
    readonly isOutOfOffset: boolean;
    readonly isOutOfGas: boolean;
    readonly isOutOfFund: boolean;
    readonly isPcUnderflow: boolean;
    readonly isCreateEmpty: boolean;
    readonly isOther: boolean;
    readonly asOther: Text;
    readonly isMaxNonce: boolean;
    readonly isInvalidCode: boolean;
    readonly asInvalidCode: u8;
    readonly type: 'StackUnderflow' | 'StackOverflow' | 'InvalidJump' | 'InvalidRange' | 'DesignatedInvalid' | 'CallTooDeep' | 'CreateCollision' | 'CreateContractLimit' | 'OutOfOffset' | 'OutOfGas' | 'OutOfFund' | 'PcUnderflow' | 'CreateEmpty' | 'Other' | 'MaxNonce' | 'InvalidCode';
  }

  /** @name EvmCoreErrorExitRevert (101) */
  interface EvmCoreErrorExitRevert extends Enum {
    readonly isReverted: boolean;
    readonly type: 'Reverted';
  }

  /** @name EvmCoreErrorExitFatal (102) */
  interface EvmCoreErrorExitFatal extends Enum {
    readonly isNotSupported: boolean;
    readonly isUnhandledInterrupt: boolean;
    readonly isCallErrorAsFatal: boolean;
    readonly asCallErrorAsFatal: EvmCoreErrorExitError;
    readonly isOther: boolean;
    readonly asOther: Text;
    readonly type: 'NotSupported' | 'UnhandledInterrupt' | 'CallErrorAsFatal' | 'Other';
  }

  /** @name PalletEvmEvent (103) */
  interface PalletEvmEvent extends Enum {
    readonly isLog: boolean;
    readonly asLog: {
      readonly log: EthereumLog;
    } & Struct;
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly address: H160;
    } & Struct;
    readonly isCreatedFailed: boolean;
    readonly asCreatedFailed: {
      readonly address: H160;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly address: H160;
    } & Struct;
    readonly isExecutedFailed: boolean;
    readonly asExecutedFailed: {
      readonly address: H160;
    } & Struct;
    readonly type: 'Log' | 'Created' | 'CreatedFailed' | 'Executed' | 'ExecutedFailed';
  }

  /** @name EthereumLog (104) */
  interface EthereumLog extends Struct {
    readonly address: H160;
    readonly topics: Vec<H256>;
    readonly data: Bytes;
  }

  /** @name PalletBaseFeeEvent (106) */
  interface PalletBaseFeeEvent extends Enum {
    readonly isNewBaseFeePerGas: boolean;
    readonly asNewBaseFeePerGas: {
      readonly fee: U256;
    } & Struct;
    readonly isBaseFeeOverflow: boolean;
    readonly isNewElasticity: boolean;
    readonly asNewElasticity: {
      readonly elasticity: Permill;
    } & Struct;
    readonly type: 'NewBaseFeePerGas' | 'BaseFeeOverflow' | 'NewElasticity';
  }

  /** @name PalletAirdropClaimsEvent (110) */
  interface PalletAirdropClaimsEvent extends Enum {
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly recipient: AccountId32;
      readonly source: PalletAirdropClaimsUtilsMultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Claimed';
  }

  /** @name PalletAirdropClaimsUtilsMultiAddress (111) */
  interface PalletAirdropClaimsUtilsMultiAddress extends Enum {
    readonly isEvm: boolean;
    readonly asEvm: PalletAirdropClaimsUtilsEthereumAddress;
    readonly isNative: boolean;
    readonly asNative: AccountId32;
    readonly type: 'Evm' | 'Native';
  }

  /** @name PalletAirdropClaimsUtilsEthereumAddress (112) */
  interface PalletAirdropClaimsUtilsEthereumAddress extends U8aFixed {}

  /** @name PalletEth2LightClientEvent (113) */
  interface PalletEth2LightClientEvent extends Enum {
    readonly isInit: boolean;
    readonly asInit: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly headerInfo: EthTypesExecutionHeaderInfo;
    } & Struct;
    readonly isSubmitBeaconChainLightClientUpdate: boolean;
    readonly asSubmitBeaconChainLightClientUpdate: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly submitter: AccountId32;
      readonly beaconBlockHeader: EthTypesEth2BeaconBlockHeader;
    } & Struct;
    readonly isSubmitExecutionHeader: boolean;
    readonly asSubmitExecutionHeader: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly headerInfo: EthTypesBlockHeader;
    } & Struct;
    readonly isUpdateTrustedSigner: boolean;
    readonly asUpdateTrustedSigner: {
      readonly trustedSigner: AccountId32;
    } & Struct;
    readonly type: 'Init' | 'SubmitBeaconChainLightClientUpdate' | 'SubmitExecutionHeader' | 'UpdateTrustedSigner';
  }

  /** @name WebbProposalsHeaderTypedChainId (114) */
  interface WebbProposalsHeaderTypedChainId extends Enum {
    readonly isNone: boolean;
    readonly isEvm: boolean;
    readonly asEvm: u32;
    readonly isSubstrate: boolean;
    readonly asSubstrate: u32;
    readonly isPolkadotParachain: boolean;
    readonly asPolkadotParachain: u32;
    readonly isKusamaParachain: boolean;
    readonly asKusamaParachain: u32;
    readonly isRococoParachain: boolean;
    readonly asRococoParachain: u32;
    readonly isCosmos: boolean;
    readonly asCosmos: u32;
    readonly isSolana: boolean;
    readonly asSolana: u32;
    readonly isInk: boolean;
    readonly asInk: u32;
    readonly type: 'None' | 'Evm' | 'Substrate' | 'PolkadotParachain' | 'KusamaParachain' | 'RococoParachain' | 'Cosmos' | 'Solana' | 'Ink';
  }

  /** @name EthTypesExecutionHeaderInfo (115) */
  interface EthTypesExecutionHeaderInfo extends Struct {
    readonly parentHash: H256;
    readonly blockNumber: u64;
    readonly submitter: AccountId32;
  }

  /** @name EthTypesEth2BeaconBlockHeader (117) */
  interface EthTypesEth2BeaconBlockHeader extends Struct {
    readonly slot: u64;
    readonly proposerIndex: u64;
    readonly parentRoot: H256;
    readonly stateRoot: H256;
    readonly bodyRoot: H256;
  }

  /** @name EthTypesBlockHeader (118) */
  interface EthTypesBlockHeader extends Struct {
    readonly parentHash: H256;
    readonly unclesHash: H256;
    readonly author: H160;
    readonly stateRoot: H256;
    readonly transactionsRoot: H256;
    readonly receiptsRoot: H256;
    readonly logBloom: EthTypesBloom;
    readonly difficulty: U256;
    readonly number: u64;
    readonly gasLimit: U256;
    readonly gasUsed: U256;
    readonly timestamp: u64;
    readonly extraData: Bytes;
    readonly mixHash: H256;
    readonly nonce: EthTypesH64;
    readonly baseFeePerGas: Option<u64>;
    readonly withdrawalsRoot: Option<H256>;
    readonly hash_: Option<H256>;
    readonly partialHash: Option<H256>;
  }

  /** @name EthTypesBloom (120) */
  interface EthTypesBloom extends EthbloomBloom {}

  /** @name EthbloomBloom (121) */
  interface EthbloomBloom extends U8aFixed {}

  /** @name EthTypesH64 (124) */
  interface EthTypesH64 extends EthereumTypesHashH64 {}

  /** @name EthereumTypesHashH64 (125) */
  interface EthereumTypesHashH64 extends U8aFixed {}

  /** @name PalletRolesEvent (129) */
  interface PalletRolesEvent extends Enum {
    readonly isRoleAssigned: boolean;
    readonly asRoleAssigned: {
      readonly account: AccountId32;
      readonly role: TanglePrimitivesRolesRoleType;
    } & Struct;
    readonly isRoleRemoved: boolean;
    readonly asRoleRemoved: {
      readonly account: AccountId32;
      readonly role: TanglePrimitivesRolesRoleType;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isProfileCreated: boolean;
    readonly asProfileCreated: {
      readonly account: AccountId32;
      readonly totalProfileRestake: u128;
      readonly roles: Vec<TanglePrimitivesRolesRoleType>;
    } & Struct;
    readonly isProfileUpdated: boolean;
    readonly asProfileUpdated: {
      readonly account: AccountId32;
      readonly totalProfileRestake: u128;
      readonly roles: Vec<TanglePrimitivesRolesRoleType>;
    } & Struct;
    readonly isProfileDeleted: boolean;
    readonly asProfileDeleted: {
      readonly account: AccountId32;
    } & Struct;
    readonly isPendingJobs: boolean;
    readonly asPendingJobs: {
      readonly pendingJobs: Vec<ITuple<[TanglePrimitivesJobsJobKey, u32]>>;
    } & Struct;
    readonly type: 'RoleAssigned' | 'RoleRemoved' | 'Slashed' | 'ProfileCreated' | 'ProfileUpdated' | 'ProfileDeleted' | 'PendingJobs';
  }

  /** @name TanglePrimitivesRolesRoleType (130) */
  interface TanglePrimitivesRolesRoleType extends Enum {
    readonly isTss: boolean;
    readonly isZkSaaS: boolean;
    readonly type: 'Tss' | 'ZkSaaS';
  }

  /** @name TanglePrimitivesJobsJobKey (134) */
  interface TanglePrimitivesJobsJobKey extends Enum {
    readonly isDkg: boolean;
    readonly isDkgSignature: boolean;
    readonly isZkSaaSCircuit: boolean;
    readonly isZkSaaSProve: boolean;
    readonly type: 'Dkg' | 'DkgSignature' | 'ZkSaaSCircuit' | 'ZkSaaSProve';
  }

  /** @name PalletJobsModuleEvent (135) */
  interface PalletJobsModuleEvent extends Enum {
    readonly isJobSubmitted: boolean;
    readonly asJobSubmitted: {
      readonly jobId: u32;
      readonly jobKey: TanglePrimitivesJobsJobKey;
      readonly details: TanglePrimitivesJobsJobSubmission;
    } & Struct;
    readonly isJobResultSubmitted: boolean;
    readonly asJobResultSubmitted: {
      readonly jobId: u32;
      readonly jobKey: TanglePrimitivesJobsJobKey;
    } & Struct;
    readonly isValidatorRewarded: boolean;
    readonly asValidatorRewarded: {
      readonly id: AccountId32;
      readonly reward: u128;
    } & Struct;
    readonly type: 'JobSubmitted' | 'JobResultSubmitted' | 'ValidatorRewarded';
  }

  /** @name TanglePrimitivesJobsJobSubmission (136) */
  interface TanglePrimitivesJobsJobSubmission extends Struct {
    readonly expiry: u64;
    readonly jobType: TanglePrimitivesJobsJobType;
  }

  /** @name TanglePrimitivesJobsJobType (137) */
  interface TanglePrimitivesJobsJobType extends Enum {
    readonly isDkgtssPhaseOne: boolean;
    readonly asDkgtssPhaseOne: TanglePrimitivesJobsDkgtssPhaseOneJobType;
    readonly isDkgtssPhaseTwo: boolean;
    readonly asDkgtssPhaseTwo: TanglePrimitivesJobsDkgtssPhaseTwoJobType;
    readonly isZkSaaSPhaseOne: boolean;
    readonly asZkSaaSPhaseOne: TanglePrimitivesJobsZkSaaSPhaseOneJobType;
    readonly isZkSaaSPhaseTwo: boolean;
    readonly asZkSaaSPhaseTwo: TanglePrimitivesJobsZkSaaSPhaseTwoJobType;
    readonly type: 'DkgtssPhaseOne' | 'DkgtssPhaseTwo' | 'ZkSaaSPhaseOne' | 'ZkSaaSPhaseTwo';
  }

  /** @name TanglePrimitivesJobsDkgtssPhaseOneJobType (138) */
  interface TanglePrimitivesJobsDkgtssPhaseOneJobType extends Struct {
    readonly participants: Vec<AccountId32>;
    readonly threshold: u8;
    readonly permittedCaller: Option<AccountId32>;
    readonly keyType: TanglePrimitivesJobsDkgKeyType;
  }

  /** @name TanglePrimitivesJobsDkgKeyType (140) */
  interface TanglePrimitivesJobsDkgKeyType extends Enum {
    readonly isEcdsa: boolean;
    readonly isSchnorr: boolean;
    readonly type: 'Ecdsa' | 'Schnorr';
  }

  /** @name TanglePrimitivesJobsDkgtssPhaseTwoJobType (141) */
  interface TanglePrimitivesJobsDkgtssPhaseTwoJobType extends Struct {
    readonly phaseOneId: u32;
    readonly submission: Bytes;
  }

  /** @name TanglePrimitivesJobsZkSaaSPhaseOneJobType (142) */
  interface TanglePrimitivesJobsZkSaaSPhaseOneJobType extends Struct {
    readonly participants: Vec<AccountId32>;
    readonly permittedCaller: Option<AccountId32>;
    readonly system: TanglePrimitivesJobsZkSaaSSystem;
  }

  /** @name TanglePrimitivesJobsZkSaaSSystem (143) */
  interface TanglePrimitivesJobsZkSaaSSystem extends Enum {
    readonly isGroth16: boolean;
    readonly asGroth16: TanglePrimitivesJobsGroth16System;
    readonly type: 'Groth16';
  }

  /** @name TanglePrimitivesJobsGroth16System (144) */
  interface TanglePrimitivesJobsGroth16System extends Struct {
    readonly circuit: TanglePrimitivesJobsHyperData;
    readonly numInputs: u64;
    readonly numConstraints: u64;
    readonly provingKey: TanglePrimitivesJobsHyperData;
    readonly verifyingKey: Bytes;
    readonly wasm: TanglePrimitivesJobsHyperData;
  }

  /** @name TanglePrimitivesJobsHyperData (145) */
  interface TanglePrimitivesJobsHyperData extends Enum {
    readonly isRaw: boolean;
    readonly asRaw: Bytes;
    readonly isIpfs: boolean;
    readonly asIpfs: Bytes;
    readonly isHttp: boolean;
    readonly asHttp: Bytes;
    readonly type: 'Raw' | 'Ipfs' | 'Http';
  }

  /** @name TanglePrimitivesJobsZkSaaSPhaseTwoJobType (146) */
  interface TanglePrimitivesJobsZkSaaSPhaseTwoJobType extends Struct {
    readonly phaseOneId: u32;
    readonly request: TanglePrimitivesJobsZkSaaSPhaseTwoRequest;
  }

  /** @name TanglePrimitivesJobsZkSaaSPhaseTwoRequest (147) */
  interface TanglePrimitivesJobsZkSaaSPhaseTwoRequest extends Enum {
    readonly isGroth16: boolean;
    readonly asGroth16: TanglePrimitivesJobsGroth16ProveRequest;
    readonly type: 'Groth16';
  }

  /** @name TanglePrimitivesJobsGroth16ProveRequest (148) */
  interface TanglePrimitivesJobsGroth16ProveRequest extends Struct {
    readonly publicInput: Bytes;
    readonly aShares: Vec<TanglePrimitivesJobsHyperData>;
    readonly axShares: Vec<TanglePrimitivesJobsHyperData>;
    readonly qapShares: Vec<TanglePrimitivesJobsQapShare>;
  }

  /** @name TanglePrimitivesJobsQapShare (151) */
  interface TanglePrimitivesJobsQapShare extends Struct {
    readonly a: TanglePrimitivesJobsHyperData;
    readonly b: TanglePrimitivesJobsHyperData;
    readonly c: TanglePrimitivesJobsHyperData;
  }

  /** @name PalletDkgEvent (152) */
  interface PalletDkgEvent extends Enum {
    readonly isFeeUpdated: boolean;
    readonly asFeeUpdated: PalletDkgFeeInfo;
    readonly type: 'FeeUpdated';
  }

  /** @name PalletDkgFeeInfo (153) */
  interface PalletDkgFeeInfo extends Struct {
    readonly baseFee: u128;
    readonly dkgValidatorFee: u128;
    readonly sigValidatorFee: u128;
    readonly refreshValidatorFee: u128;
  }

  /** @name PalletZksaasEvent (154) */
  interface PalletZksaasEvent extends Enum {
    readonly isFeeUpdated: boolean;
    readonly asFeeUpdated: PalletZksaasFeeInfo;
    readonly type: 'FeeUpdated';
  }

  /** @name PalletZksaasFeeInfo (155) */
  interface PalletZksaasFeeInfo extends Struct {
    readonly baseFee: u128;
    readonly circuitFee: u128;
    readonly proveFee: u128;
  }

  /** @name FrameSystemPhase (156) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (158) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (160) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (164) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (165) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (166) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (168) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (169) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (170) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (171) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (176) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (177) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletSudoCall (178) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name PalletBalancesCall (180) */
  interface PalletBalancesCall extends Enum {
    readonly isTransferAllowDeath: boolean;
    readonly asTransferAllowDeath: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalanceDeprecated: boolean;
    readonly asSetBalanceDeprecated: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly oldReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly isUpgradeAccounts: boolean;
    readonly asUpgradeAccounts: {
      readonly who: Vec<AccountId32>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isForceSetBalance: boolean;
    readonly asForceSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
    } & Struct;
    readonly type: 'TransferAllowDeath' | 'SetBalanceDeprecated' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'Transfer' | 'ForceSetBalance';
  }

  /** @name PalletBabeCall (182) */
  interface PalletBabeCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusSlotsEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusSlotsEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isPlanConfigChange: boolean;
    readonly asPlanConfigChange: {
      readonly config: SpConsensusBabeDigestsNextConfigDescriptor;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'PlanConfigChange';
  }

  /** @name SpConsensusSlotsEquivocationProof (183) */
  interface SpConsensusSlotsEquivocationProof extends Struct {
    readonly offender: SpConsensusBabeAppPublic;
    readonly slot: u64;
    readonly firstHeader: SpRuntimeHeader;
    readonly secondHeader: SpRuntimeHeader;
  }

  /** @name SpRuntimeHeader (184) */
  interface SpRuntimeHeader extends Struct {
    readonly parentHash: H256;
    readonly number: Compact<u64>;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: SpRuntimeDigest;
  }

  /** @name SpConsensusBabeAppPublic (185) */
  interface SpConsensusBabeAppPublic extends SpCoreSr25519Public {}

  /** @name SpSessionMembershipProof (187) */
  interface SpSessionMembershipProof extends Struct {
    readonly session: u32;
    readonly trieNodes: Vec<Bytes>;
    readonly validatorCount: u32;
  }

  /** @name SpConsensusBabeDigestsNextConfigDescriptor (188) */
  interface SpConsensusBabeDigestsNextConfigDescriptor extends Enum {
    readonly isV1: boolean;
    readonly asV1: {
      readonly c: ITuple<[u64, u64]>;
      readonly allowedSlots: SpConsensusBabeAllowedSlots;
    } & Struct;
    readonly type: 'V1';
  }

  /** @name SpConsensusBabeAllowedSlots (190) */
  interface SpConsensusBabeAllowedSlots extends Enum {
    readonly isPrimarySlots: boolean;
    readonly isPrimaryAndSecondaryPlainSlots: boolean;
    readonly isPrimaryAndSecondaryVRFSlots: boolean;
    readonly type: 'PrimarySlots' | 'PrimaryAndSecondaryPlainSlots' | 'PrimaryAndSecondaryVRFSlots';
  }

  /** @name PalletGrandpaCall (191) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u64;
      readonly bestFinalizedBlockNumber: u64;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpConsensusGrandpaEquivocationProof (192) */
  interface SpConsensusGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpConsensusGrandpaEquivocation;
  }

  /** @name SpConsensusGrandpaEquivocation (193) */
  interface SpConsensusGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (194) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (195) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u64;
  }

  /** @name SpConsensusGrandpaAppSignature (196) */
  interface SpConsensusGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (197) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (200) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (201) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u64;
  }

  /** @name SpCoreVoid (203) */
  type SpCoreVoid = Null;

  /** @name PalletIndicesCall (204) */
  interface PalletIndicesCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly index: u32;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly new_: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isFree: boolean;
    readonly asFree: {
      readonly index: u32;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly new_: MultiAddress;
      readonly index: u32;
      readonly freeze: bool;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly index: u32;
    } & Struct;
    readonly type: 'Claim' | 'Transfer' | 'Free' | 'ForceTransfer' | 'Freeze';
  }

  /** @name PalletDemocracyCall (205) */
  interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly refIndex: Compact<u32>;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isEmergencyCancel: boolean;
    readonly asEmergencyCancel: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExternalPropose: boolean;
    readonly asExternalPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isFastTrack: boolean;
    readonly asFastTrack: {
      readonly proposalHash: H256;
      readonly votingPeriod: u64;
      readonly delay: u64;
    } & Struct;
    readonly isVetoExternal: boolean;
    readonly asVetoExternal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isCancelReferendum: boolean;
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: MultiAddress;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isBlacklist: boolean;
    readonly asBlacklist: {
      readonly proposalHash: H256;
      readonly maybeRefIndex: Option<u32>;
    } & Struct;
    readonly isCancelProposal: boolean;
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'Blacklist' | 'CancelProposal' | 'SetMetadata';
  }

  /** @name FrameSupportPreimagesBounded (206) */
  interface FrameSupportPreimagesBounded extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: {
      readonly hash_: H256;
    } & Struct;
    readonly isInline: boolean;
    readonly asInline: Bytes;
    readonly isLookup: boolean;
    readonly asLookup: {
      readonly hash_: H256;
      readonly len: u32;
    } & Struct;
    readonly type: 'Legacy' | 'Inline' | 'Lookup';
  }

  /** @name PalletDemocracyConviction (208) */
  interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletCollectiveCall (211) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: SpWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'DisapproveProposal' | 'Close';
  }

  /** @name PalletVestingCall (212) */
  interface PalletVestingCall extends Enum {
    readonly isVest: boolean;
    readonly isVestOther: boolean;
    readonly asVestOther: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isForceVestedTransfer: boolean;
    readonly asForceVestedTransfer: {
      readonly source: MultiAddress;
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isMergeSchedules: boolean;
    readonly asMergeSchedules: {
      readonly schedule1Index: u32;
      readonly schedule2Index: u32;
    } & Struct;
    readonly type: 'Vest' | 'VestOther' | 'VestedTransfer' | 'ForceVestedTransfer' | 'MergeSchedules';
  }

  /** @name PalletVestingVestingInfo (213) */
  interface PalletVestingVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u64;
  }

  /** @name PalletElectionsPhragmenCall (214) */
  interface PalletElectionsPhragmenCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly votes: Vec<AccountId32>;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isRemoveVoter: boolean;
    readonly isSubmitCandidacy: boolean;
    readonly asSubmitCandidacy: {
      readonly candidateCount: Compact<u32>;
    } & Struct;
    readonly isRenounceCandidacy: boolean;
    readonly asRenounceCandidacy: {
      readonly renouncing: PalletElectionsPhragmenRenouncing;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
      readonly slashBond: bool;
      readonly rerunElection: bool;
    } & Struct;
    readonly isCleanDefunctVoters: boolean;
    readonly asCleanDefunctVoters: {
      readonly numVoters: u32;
      readonly numDefunct: u32;
    } & Struct;
    readonly type: 'Vote' | 'RemoveVoter' | 'SubmitCandidacy' | 'RenounceCandidacy' | 'RemoveMember' | 'CleanDefunctVoters';
  }

  /** @name PalletElectionsPhragmenRenouncing (215) */
  interface PalletElectionsPhragmenRenouncing extends Enum {
    readonly isMember: boolean;
    readonly isRunnerUp: boolean;
    readonly isCandidate: boolean;
    readonly asCandidate: Compact<u32>;
    readonly type: 'Member' | 'RunnerUp' | 'Candidate';
  }

  /** @name PalletElectionProviderMultiPhaseCall (216) */
  interface PalletElectionProviderMultiPhaseCall extends Enum {
    readonly isSubmitUnsigned: boolean;
    readonly asSubmitUnsigned: {
      readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
      readonly witness: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize;
    } & Struct;
    readonly isSetMinimumUntrustedScore: boolean;
    readonly asSetMinimumUntrustedScore: {
      readonly maybeNextScore: Option<SpNposElectionsElectionScore>;
    } & Struct;
    readonly isSetEmergencyElectionResult: boolean;
    readonly asSetEmergencyElectionResult: {
      readonly supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>;
    } & Struct;
    readonly isSubmit: boolean;
    readonly asSubmit: {
      readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
    } & Struct;
    readonly isGovernanceFallback: boolean;
    readonly asGovernanceFallback: {
      readonly maybeMaxVoters: Option<u32>;
      readonly maybeMaxTargets: Option<u32>;
    } & Struct;
    readonly type: 'SubmitUnsigned' | 'SetMinimumUntrustedScore' | 'SetEmergencyElectionResult' | 'Submit' | 'GovernanceFallback';
  }

  /** @name PalletElectionProviderMultiPhaseRawSolution (217) */
  interface PalletElectionProviderMultiPhaseRawSolution extends Struct {
    readonly solution: TangleTestnetRuntimeNposSolution16;
    readonly score: SpNposElectionsElectionScore;
    readonly round: u32;
  }

  /** @name TangleTestnetRuntimeNposSolution16 (218) */
  interface TangleTestnetRuntimeNposSolution16 extends Struct {
    readonly votes1: Vec<ITuple<[Compact<u32>, Compact<u16>]>>;
    readonly votes2: Vec<ITuple<[Compact<u32>, ITuple<[Compact<u16>, Compact<PerU16>]>, Compact<u16>]>>;
    readonly votes3: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes4: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes5: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes6: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes7: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes8: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes9: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes10: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes11: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes12: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes13: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes14: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes15: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes16: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  }

  /** @name PalletElectionProviderMultiPhaseSolutionOrSnapshotSize (269) */
  interface PalletElectionProviderMultiPhaseSolutionOrSnapshotSize extends Struct {
    readonly voters: Compact<u32>;
    readonly targets: Compact<u32>;
  }

  /** @name SpNposElectionsSupport (273) */
  interface SpNposElectionsSupport extends Struct {
    readonly total: u128;
    readonly voters: Vec<ITuple<[AccountId32, u128]>>;
  }

  /** @name PalletStakingPalletCall (274) */
  interface PalletStakingPalletCall extends Enum {
    readonly isBond: boolean;
    readonly asBond: {
      readonly value: Compact<u128>;
      readonly payee: PalletStakingRewardDestination;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly maxAdditional: Compact<u128>;
    } & Struct;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isValidate: boolean;
    readonly asValidate: {
      readonly prefs: PalletStakingValidatorPrefs;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly targets: Vec<MultiAddress>;
    } & Struct;
    readonly isChill: boolean;
    readonly isSetPayee: boolean;
    readonly asSetPayee: {
      readonly payee: PalletStakingRewardDestination;
    } & Struct;
    readonly isSetController: boolean;
    readonly isSetValidatorCount: boolean;
    readonly asSetValidatorCount: {
      readonly new_: Compact<u32>;
    } & Struct;
    readonly isIncreaseValidatorCount: boolean;
    readonly asIncreaseValidatorCount: {
      readonly additional: Compact<u32>;
    } & Struct;
    readonly isScaleValidatorCount: boolean;
    readonly asScaleValidatorCount: {
      readonly factor: Percent;
    } & Struct;
    readonly isForceNoEras: boolean;
    readonly isForceNewEra: boolean;
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isForceUnstake: boolean;
    readonly asForceUnstake: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isForceNewEraAlways: boolean;
    readonly isCancelDeferredSlash: boolean;
    readonly asCancelDeferredSlash: {
      readonly era: u32;
      readonly slashIndices: Vec<u32>;
    } & Struct;
    readonly isPayoutStakers: boolean;
    readonly asPayoutStakers: {
      readonly validatorStash: AccountId32;
      readonly era: u32;
    } & Struct;
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isReapStash: boolean;
    readonly asReapStash: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isKick: boolean;
    readonly asKick: {
      readonly who: Vec<MultiAddress>;
    } & Struct;
    readonly isSetStakingConfigs: boolean;
    readonly asSetStakingConfigs: {
      readonly minNominatorBond: PalletStakingPalletConfigOpU128;
      readonly minValidatorBond: PalletStakingPalletConfigOpU128;
      readonly maxNominatorCount: PalletStakingPalletConfigOpU32;
      readonly maxValidatorCount: PalletStakingPalletConfigOpU32;
      readonly chillThreshold: PalletStakingPalletConfigOpPercent;
      readonly minCommission: PalletStakingPalletConfigOpPerbill;
    } & Struct;
    readonly isChillOther: boolean;
    readonly asChillOther: {
      readonly controller: AccountId32;
    } & Struct;
    readonly isForceApplyMinCommission: boolean;
    readonly asForceApplyMinCommission: {
      readonly validatorStash: AccountId32;
    } & Struct;
    readonly isSetMinCommission: boolean;
    readonly asSetMinCommission: {
      readonly new_: Perbill;
    } & Struct;
    readonly type: 'Bond' | 'BondExtra' | 'Unbond' | 'WithdrawUnbonded' | 'Validate' | 'Nominate' | 'Chill' | 'SetPayee' | 'SetController' | 'SetValidatorCount' | 'IncreaseValidatorCount' | 'ScaleValidatorCount' | 'ForceNoEras' | 'ForceNewEra' | 'SetInvulnerables' | 'ForceUnstake' | 'ForceNewEraAlways' | 'CancelDeferredSlash' | 'PayoutStakers' | 'Rebond' | 'ReapStash' | 'Kick' | 'SetStakingConfigs' | 'ChillOther' | 'ForceApplyMinCommission' | 'SetMinCommission';
  }

  /** @name PalletStakingRewardDestination (275) */
  interface PalletStakingRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PalletStakingPalletConfigOpU128 (279) */
  interface PalletStakingPalletConfigOpU128 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u128;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpU32 (280) */
  interface PalletStakingPalletConfigOpU32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpPercent (281) */
  interface PalletStakingPalletConfigOpPercent extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Percent;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpPerbill (282) */
  interface PalletStakingPalletConfigOpPerbill extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Perbill;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletSessionCall (283) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: TangleTestnetRuntimeOpaqueSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name TangleTestnetRuntimeOpaqueSessionKeys (284) */
  interface TangleTestnetRuntimeOpaqueSessionKeys extends Struct {
    readonly babe: SpConsensusBabeAppPublic;
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly imOnline: PalletImOnlineSr25519AppSr25519Public;
  }

  /** @name PalletTreasuryCall (285) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly amount: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'Spend' | 'RemoveApproval';
  }

  /** @name PalletBountiesCall (286) */
  interface PalletBountiesCall extends Enum {
    readonly isProposeBounty: boolean;
    readonly asProposeBounty: {
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isApproveBounty: boolean;
    readonly asApproveBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly bountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAwardBounty: boolean;
    readonly asAwardBounty: {
      readonly bountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimBounty: boolean;
    readonly asClaimBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isCloseBounty: boolean;
    readonly asCloseBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isExtendBountyExpiry: boolean;
    readonly asExtendBountyExpiry: {
      readonly bountyId: Compact<u32>;
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry';
  }

  /** @name PalletChildBountiesCall (287) */
  interface PalletChildBountiesCall extends Enum {
    readonly isAddChildBounty: boolean;
    readonly asAddChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isAwardChildBounty: boolean;
    readonly asAwardChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimChildBounty: boolean;
    readonly asClaimChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isCloseChildBounty: boolean;
    readonly asCloseChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly type: 'AddChildBounty' | 'ProposeCurator' | 'AcceptCurator' | 'UnassignCurator' | 'AwardChildBounty' | 'ClaimChildBounty' | 'CloseChildBounty';
  }

  /** @name PalletBagsListCall (288) */
  interface PalletBagsListCall extends Enum {
    readonly isRebag: boolean;
    readonly asRebag: {
      readonly dislocated: MultiAddress;
    } & Struct;
    readonly isPutInFrontOf: boolean;
    readonly asPutInFrontOf: {
      readonly lighter: MultiAddress;
    } & Struct;
    readonly isPutInFrontOfOther: boolean;
    readonly asPutInFrontOfOther: {
      readonly heavier: MultiAddress;
      readonly lighter: MultiAddress;
    } & Struct;
    readonly type: 'Rebag' | 'PutInFrontOf' | 'PutInFrontOfOther';
  }

  /** @name PalletNominationPoolsCall (289) */
  interface PalletNominationPoolsCall extends Enum {
    readonly isJoin: boolean;
    readonly asJoin: {
      readonly amount: Compact<u128>;
      readonly poolId: u32;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly extra: PalletNominationPoolsBondExtra;
    } & Struct;
    readonly isClaimPayout: boolean;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly memberAccount: MultiAddress;
      readonly unbondingPoints: Compact<u128>;
    } & Struct;
    readonly isPoolWithdrawUnbonded: boolean;
    readonly asPoolWithdrawUnbonded: {
      readonly poolId: u32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly memberAccount: MultiAddress;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly amount: Compact<u128>;
      readonly root: MultiAddress;
      readonly nominator: MultiAddress;
      readonly bouncer: MultiAddress;
    } & Struct;
    readonly isCreateWithPoolId: boolean;
    readonly asCreateWithPoolId: {
      readonly amount: Compact<u128>;
      readonly root: MultiAddress;
      readonly nominator: MultiAddress;
      readonly bouncer: MultiAddress;
      readonly poolId: u32;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly poolId: u32;
      readonly validators: Vec<AccountId32>;
    } & Struct;
    readonly isSetState: boolean;
    readonly asSetState: {
      readonly poolId: u32;
      readonly state: PalletNominationPoolsPoolState;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly poolId: u32;
      readonly metadata: Bytes;
    } & Struct;
    readonly isSetConfigs: boolean;
    readonly asSetConfigs: {
      readonly minJoinBond: PalletNominationPoolsConfigOpU128;
      readonly minCreateBond: PalletNominationPoolsConfigOpU128;
      readonly maxPools: PalletNominationPoolsConfigOpU32;
      readonly maxMembers: PalletNominationPoolsConfigOpU32;
      readonly maxMembersPerPool: PalletNominationPoolsConfigOpU32;
      readonly globalMaxCommission: PalletNominationPoolsConfigOpPerbill;
    } & Struct;
    readonly isUpdateRoles: boolean;
    readonly asUpdateRoles: {
      readonly poolId: u32;
      readonly newRoot: PalletNominationPoolsConfigOpAccountId32;
      readonly newNominator: PalletNominationPoolsConfigOpAccountId32;
      readonly newBouncer: PalletNominationPoolsConfigOpAccountId32;
    } & Struct;
    readonly isChill: boolean;
    readonly asChill: {
      readonly poolId: u32;
    } & Struct;
    readonly isBondExtraOther: boolean;
    readonly asBondExtraOther: {
      readonly member: MultiAddress;
      readonly extra: PalletNominationPoolsBondExtra;
    } & Struct;
    readonly isSetClaimPermission: boolean;
    readonly asSetClaimPermission: {
      readonly permission: PalletNominationPoolsClaimPermission;
    } & Struct;
    readonly isClaimPayoutOther: boolean;
    readonly asClaimPayoutOther: {
      readonly other: AccountId32;
    } & Struct;
    readonly isSetCommission: boolean;
    readonly asSetCommission: {
      readonly poolId: u32;
      readonly newCommission: Option<ITuple<[Perbill, AccountId32]>>;
    } & Struct;
    readonly isSetCommissionMax: boolean;
    readonly asSetCommissionMax: {
      readonly poolId: u32;
      readonly maxCommission: Perbill;
    } & Struct;
    readonly isSetCommissionChangeRate: boolean;
    readonly asSetCommissionChangeRate: {
      readonly poolId: u32;
      readonly changeRate: PalletNominationPoolsCommissionChangeRate;
    } & Struct;
    readonly isClaimCommission: boolean;
    readonly asClaimCommission: {
      readonly poolId: u32;
    } & Struct;
    readonly type: 'Join' | 'BondExtra' | 'ClaimPayout' | 'Unbond' | 'PoolWithdrawUnbonded' | 'WithdrawUnbonded' | 'Create' | 'CreateWithPoolId' | 'Nominate' | 'SetState' | 'SetMetadata' | 'SetConfigs' | 'UpdateRoles' | 'Chill' | 'BondExtraOther' | 'SetClaimPermission' | 'ClaimPayoutOther' | 'SetCommission' | 'SetCommissionMax' | 'SetCommissionChangeRate' | 'ClaimCommission';
  }

  /** @name PalletNominationPoolsBondExtra (290) */
  interface PalletNominationPoolsBondExtra extends Enum {
    readonly isFreeBalance: boolean;
    readonly asFreeBalance: u128;
    readonly isRewards: boolean;
    readonly type: 'FreeBalance' | 'Rewards';
  }

  /** @name PalletNominationPoolsConfigOpU128 (291) */
  interface PalletNominationPoolsConfigOpU128 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u128;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletNominationPoolsConfigOpU32 (292) */
  interface PalletNominationPoolsConfigOpU32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletNominationPoolsConfigOpPerbill (293) */
  interface PalletNominationPoolsConfigOpPerbill extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Perbill;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletNominationPoolsConfigOpAccountId32 (294) */
  interface PalletNominationPoolsConfigOpAccountId32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: AccountId32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletNominationPoolsClaimPermission (295) */
  interface PalletNominationPoolsClaimPermission extends Enum {
    readonly isPermissioned: boolean;
    readonly isPermissionlessCompound: boolean;
    readonly isPermissionlessWithdraw: boolean;
    readonly isPermissionlessAll: boolean;
    readonly type: 'Permissioned' | 'PermissionlessCompound' | 'PermissionlessWithdraw' | 'PermissionlessAll';
  }

  /** @name PalletSchedulerCall (296) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u64;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: U8aFixed;
      readonly when: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: U8aFixed;
      readonly after: u64;
      readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name PalletPreimageCall (298) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage';
  }

  /** @name PalletTransactionPauseModuleCall (299) */
  interface PalletTransactionPauseModuleCall extends Enum {
    readonly isPauseTransaction: boolean;
    readonly asPauseTransaction: {
      readonly palletName: Bytes;
      readonly functionName: Bytes;
    } & Struct;
    readonly isUnpauseTransaction: boolean;
    readonly asUnpauseTransaction: {
      readonly palletName: Bytes;
      readonly functionName: Bytes;
    } & Struct;
    readonly type: 'PauseTransaction' | 'UnpauseTransaction';
  }

  /** @name PalletImOnlineCall (300) */
  interface PalletImOnlineCall extends Enum {
    readonly isHeartbeat: boolean;
    readonly asHeartbeat: {
      readonly heartbeat: PalletImOnlineHeartbeat;
      readonly signature: PalletImOnlineSr25519AppSr25519Signature;
    } & Struct;
    readonly type: 'Heartbeat';
  }

  /** @name PalletImOnlineHeartbeat (301) */
  interface PalletImOnlineHeartbeat extends Struct {
    readonly blockNumber: u64;
    readonly sessionIndex: u32;
    readonly authorityIndex: u32;
    readonly validatorsLen: u32;
  }

  /** @name PalletImOnlineSr25519AppSr25519Signature (302) */
  interface PalletImOnlineSr25519AppSr25519Signature extends SpCoreSr25519Signature {}

  /** @name SpCoreSr25519Signature (303) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name PalletIdentityCall (304) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: PalletIdentityBitFlags;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
  }

  /** @name PalletIdentityIdentityInfo (305) */
  interface PalletIdentityIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityBitFlags (341) */
  interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentityIdentityField (342) */
  interface PalletIdentityIdentityField extends Enum {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
    readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
  }

  /** @name PalletIdentityJudgement (343) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name PalletUtilityCall (344) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: TangleTestnetRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
  }

  /** @name TangleTestnetRuntimeOriginCaller (346) */
  interface TangleTestnetRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly isEthereum: boolean;
    readonly asEthereum: PalletEthereumRawOrigin;
    readonly type: 'System' | 'Void' | 'Council' | 'Ethereum';
  }

  /** @name FrameSupportDispatchRawOrigin (347) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (348) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name PalletEthereumRawOrigin (349) */
  interface PalletEthereumRawOrigin extends Enum {
    readonly isEthereumTransaction: boolean;
    readonly asEthereumTransaction: H160;
    readonly type: 'EthereumTransaction';
  }

  /** @name PalletEthereumCall (350) */
  interface PalletEthereumCall extends Enum {
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly transaction: EthereumTransactionTransactionV2;
    } & Struct;
    readonly type: 'Transact';
  }

  /** @name EthereumTransactionTransactionV2 (351) */
  interface EthereumTransactionTransactionV2 extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: EthereumTransactionLegacyTransaction;
    readonly isEip2930: boolean;
    readonly asEip2930: EthereumTransactionEip2930Transaction;
    readonly isEip1559: boolean;
    readonly asEip1559: EthereumTransactionEip1559Transaction;
    readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
  }

  /** @name EthereumTransactionLegacyTransaction (352) */
  interface EthereumTransactionLegacyTransaction extends Struct {
    readonly nonce: U256;
    readonly gasPrice: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly signature: EthereumTransactionTransactionSignature;
  }

  /** @name EthereumTransactionTransactionAction (353) */
  interface EthereumTransactionTransactionAction extends Enum {
    readonly isCall: boolean;
    readonly asCall: H160;
    readonly isCreate: boolean;
    readonly type: 'Call' | 'Create';
  }

  /** @name EthereumTransactionTransactionSignature (354) */
  interface EthereumTransactionTransactionSignature extends Struct {
    readonly v: u64;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name EthereumTransactionEip2930Transaction (356) */
  interface EthereumTransactionEip2930Transaction extends Struct {
    readonly chainId: u64;
    readonly nonce: U256;
    readonly gasPrice: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly accessList: Vec<EthereumTransactionAccessListItem>;
    readonly oddYParity: bool;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name EthereumTransactionAccessListItem (358) */
  interface EthereumTransactionAccessListItem extends Struct {
    readonly address: H160;
    readonly storageKeys: Vec<H256>;
  }

  /** @name EthereumTransactionEip1559Transaction (359) */
  interface EthereumTransactionEip1559Transaction extends Struct {
    readonly chainId: u64;
    readonly nonce: U256;
    readonly maxPriorityFeePerGas: U256;
    readonly maxFeePerGas: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly accessList: Vec<EthereumTransactionAccessListItem>;
    readonly oddYParity: bool;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name PalletEvmCall (360) */
  interface PalletEvmCall extends Enum {
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly address: H160;
      readonly value: u128;
    } & Struct;
    readonly isCall: boolean;
    readonly asCall: {
      readonly source: H160;
      readonly target: H160;
      readonly input: Bytes;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly source: H160;
      readonly init: Bytes;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly isCreate2: boolean;
    readonly asCreate2: {
      readonly source: H160;
      readonly init: Bytes;
      readonly salt: H256;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly type: 'Withdraw' | 'Call' | 'Create' | 'Create2';
  }

  /** @name PalletDynamicFeeCall (364) */
  interface PalletDynamicFeeCall extends Enum {
    readonly isNoteMinGasPriceTarget: boolean;
    readonly asNoteMinGasPriceTarget: {
      readonly target: U256;
    } & Struct;
    readonly type: 'NoteMinGasPriceTarget';
  }

  /** @name PalletBaseFeeCall (365) */
  interface PalletBaseFeeCall extends Enum {
    readonly isSetBaseFeePerGas: boolean;
    readonly asSetBaseFeePerGas: {
      readonly fee: U256;
    } & Struct;
    readonly isSetElasticity: boolean;
    readonly asSetElasticity: {
      readonly elasticity: Permill;
    } & Struct;
    readonly type: 'SetBaseFeePerGas' | 'SetElasticity';
  }

  /** @name PalletHotfixSufficientsCall (366) */
  interface PalletHotfixSufficientsCall extends Enum {
    readonly isHotfixIncAccountSufficients: boolean;
    readonly asHotfixIncAccountSufficients: {
      readonly addresses: Vec<H160>;
    } & Struct;
    readonly type: 'HotfixIncAccountSufficients';
  }

  /** @name PalletAirdropClaimsCall (368) */
  interface PalletAirdropClaimsCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly dest: Option<PalletAirdropClaimsUtilsMultiAddress>;
      readonly signer: Option<PalletAirdropClaimsUtilsMultiAddress>;
      readonly signature: PalletAirdropClaimsUtilsMultiAddressSignature;
    } & Struct;
    readonly isMintClaim: boolean;
    readonly asMintClaim: {
      readonly who: PalletAirdropClaimsUtilsMultiAddress;
      readonly value: u128;
      readonly vestingSchedule: Option<Vec<ITuple<[u128, u128, u64]>>>;
      readonly statement: Option<PalletAirdropClaimsStatementKind>;
    } & Struct;
    readonly isClaimAttest: boolean;
    readonly asClaimAttest: {
      readonly dest: Option<PalletAirdropClaimsUtilsMultiAddress>;
      readonly signer: Option<PalletAirdropClaimsUtilsMultiAddress>;
      readonly signature: PalletAirdropClaimsUtilsMultiAddressSignature;
      readonly statement: Bytes;
    } & Struct;
    readonly isMoveClaim: boolean;
    readonly asMoveClaim: {
      readonly old: PalletAirdropClaimsUtilsMultiAddress;
      readonly new_: PalletAirdropClaimsUtilsMultiAddress;
    } & Struct;
    readonly isForceSetExpiryConfig: boolean;
    readonly asForceSetExpiryConfig: {
      readonly expiryBlock: u64;
      readonly dest: PalletAirdropClaimsUtilsMultiAddress;
    } & Struct;
    readonly type: 'Claim' | 'MintClaim' | 'ClaimAttest' | 'MoveClaim' | 'ForceSetExpiryConfig';
  }

  /** @name PalletAirdropClaimsUtilsMultiAddressSignature (370) */
  interface PalletAirdropClaimsUtilsMultiAddressSignature extends Enum {
    readonly isEvm: boolean;
    readonly asEvm: PalletAirdropClaimsUtilsEthereumAddressEcdsaSignature;
    readonly isNative: boolean;
    readonly asNative: PalletAirdropClaimsUtilsSr25519Signature;
    readonly type: 'Evm' | 'Native';
  }

  /** @name PalletAirdropClaimsUtilsEthereumAddressEcdsaSignature (371) */
  interface PalletAirdropClaimsUtilsEthereumAddressEcdsaSignature extends U8aFixed {}

  /** @name PalletAirdropClaimsUtilsSr25519Signature (373) */
  interface PalletAirdropClaimsUtilsSr25519Signature extends SpCoreSr25519Signature {}

  /** @name PalletAirdropClaimsStatementKind (379) */
  interface PalletAirdropClaimsStatementKind extends Enum {
    readonly isRegular: boolean;
    readonly isSafe: boolean;
    readonly type: 'Regular' | 'Safe';
  }

  /** @name PalletEth2LightClientCall (380) */
  interface PalletEth2LightClientCall extends Enum {
    readonly isInit: boolean;
    readonly asInit: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly args: EthTypesInitInput;
    } & Struct;
    readonly isSubmitBeaconChainLightClientUpdate: boolean;
    readonly asSubmitBeaconChainLightClientUpdate: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly lightClientUpdate: EthTypesEth2LightClientUpdate;
    } & Struct;
    readonly isSubmitExecutionHeader: boolean;
    readonly asSubmitExecutionHeader: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly blockHeader: EthTypesBlockHeader;
    } & Struct;
    readonly isUpdateTrustedSigner: boolean;
    readonly asUpdateTrustedSigner: {
      readonly trustedSigner: AccountId32;
    } & Struct;
    readonly type: 'Init' | 'SubmitBeaconChainLightClientUpdate' | 'SubmitExecutionHeader' | 'UpdateTrustedSigner';
  }

  /** @name EthTypesInitInput (381) */
  interface EthTypesInitInput extends Struct {
    readonly finalizedExecutionHeader: EthTypesBlockHeader;
    readonly finalizedBeaconHeader: EthTypesEth2ExtendedBeaconBlockHeader;
    readonly currentSyncCommittee: EthTypesEth2SyncCommittee;
    readonly nextSyncCommittee: EthTypesEth2SyncCommittee;
    readonly validateUpdates: bool;
    readonly verifyBlsSignatures: bool;
    readonly hashesGcThreshold: u64;
    readonly trustedSigner: Option<AccountId32>;
  }

  /** @name EthTypesEth2ExtendedBeaconBlockHeader (382) */
  interface EthTypesEth2ExtendedBeaconBlockHeader extends Struct {
    readonly header: EthTypesEth2BeaconBlockHeader;
    readonly beaconBlockRoot: H256;
    readonly executionBlockHash: H256;
  }

  /** @name EthTypesEth2SyncCommittee (383) */
  interface EthTypesEth2SyncCommittee extends Struct {
    readonly pubkeys: EthTypesEth2SyncCommitteePublicKeys;
    readonly aggregatePubkey: EthTypesEth2PublicKeyBytes;
  }

  /** @name EthTypesEth2SyncCommitteePublicKeys (384) */
  interface EthTypesEth2SyncCommitteePublicKeys extends Vec<EthTypesEth2PublicKeyBytes> {}

  /** @name EthTypesEth2PublicKeyBytes (386) */
  interface EthTypesEth2PublicKeyBytes extends U8aFixed {}

  /** @name EthTypesEth2LightClientUpdate (388) */
  interface EthTypesEth2LightClientUpdate extends Struct {
    readonly attestedBeaconHeader: EthTypesEth2BeaconBlockHeader;
    readonly syncAggregate: EthTypesEth2SyncAggregate;
    readonly signatureSlot: u64;
    readonly finalityUpdate: EthTypesEth2FinalizedHeaderUpdate;
    readonly syncCommitteeUpdate: Option<EthTypesEth2SyncCommitteeUpdate>;
  }

  /** @name EthTypesEth2SyncAggregate (389) */
  interface EthTypesEth2SyncAggregate extends Struct {
    readonly syncCommitteeBits: EthTypesEth2SyncCommitteeBits;
    readonly syncCommitteeSignature: EthTypesEth2SignatureBytes;
  }

  /** @name EthTypesEth2SyncCommitteeBits (390) */
  interface EthTypesEth2SyncCommitteeBits extends U8aFixed {}

  /** @name EthTypesEth2SignatureBytes (391) */
  interface EthTypesEth2SignatureBytes extends U8aFixed {}

  /** @name EthTypesEth2FinalizedHeaderUpdate (393) */
  interface EthTypesEth2FinalizedHeaderUpdate extends Struct {
    readonly headerUpdate: EthTypesEth2HeaderUpdate;
    readonly finalityBranch: Vec<H256>;
  }

  /** @name EthTypesEth2HeaderUpdate (394) */
  interface EthTypesEth2HeaderUpdate extends Struct {
    readonly beaconHeader: EthTypesEth2BeaconBlockHeader;
    readonly executionBlockHash: H256;
    readonly executionHashBranch: Vec<H256>;
  }

  /** @name EthTypesEth2SyncCommitteeUpdate (397) */
  interface EthTypesEth2SyncCommitteeUpdate extends Struct {
    readonly nextSyncCommittee: EthTypesEth2SyncCommittee;
    readonly nextSyncCommitteeBranch: Vec<H256>;
  }

  /** @name PalletRolesCall (398) */
  interface PalletRolesCall extends Enum {
    readonly isCreateProfile: boolean;
    readonly asCreateProfile: {
      readonly profile: PalletRolesProfile;
    } & Struct;
    readonly isUpdateProfile: boolean;
    readonly asUpdateProfile: {
      readonly updatedProfile: PalletRolesProfile;
    } & Struct;
    readonly isDeleteProfile: boolean;
    readonly isRemoveRole: boolean;
    readonly asRemoveRole: {
      readonly role: TanglePrimitivesRolesRoleType;
    } & Struct;
    readonly isChill: boolean;
    readonly isUnboundFunds: boolean;
    readonly asUnboundFunds: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly type: 'CreateProfile' | 'UpdateProfile' | 'DeleteProfile' | 'RemoveRole' | 'Chill' | 'UnboundFunds' | 'WithdrawUnbonded';
  }

  /** @name PalletRolesProfile (399) */
  interface PalletRolesProfile extends Enum {
    readonly isIndependent: boolean;
    readonly asIndependent: PalletRolesProfileIndependentRestakeProfile;
    readonly isShared: boolean;
    readonly asShared: PalletRolesProfileSharedRestakeProfile;
    readonly type: 'Independent' | 'Shared';
  }

  /** @name PalletRolesProfileIndependentRestakeProfile (400) */
  interface PalletRolesProfileIndependentRestakeProfile extends Struct {
    readonly records: Vec<PalletRolesProfileRecord>;
  }

  /** @name PalletRolesProfileRecord (402) */
  interface PalletRolesProfileRecord extends Struct {
    readonly metadata: TanglePrimitivesRolesRoleTypeMetadata;
    readonly amount: Option<u128>;
  }

  /** @name TanglePrimitivesRolesRoleTypeMetadata (403) */
  interface TanglePrimitivesRolesRoleTypeMetadata extends Enum {
    readonly isTss: boolean;
    readonly asTss: TanglePrimitivesRolesTssRoleMetadata;
    readonly isZkSaas: boolean;
    readonly asZkSaas: TanglePrimitivesRolesZkSaasRoleMetadata;
    readonly type: 'Tss' | 'ZkSaas';
  }

  /** @name TanglePrimitivesRolesTssRoleMetadata (404) */
  interface TanglePrimitivesRolesTssRoleMetadata extends Struct {
    readonly authorityKey: Bytes;
    readonly keyType: TanglePrimitivesJobsDkgKeyType;
  }

  /** @name TanglePrimitivesRolesZkSaasRoleMetadata (405) */
  interface TanglePrimitivesRolesZkSaasRoleMetadata extends Struct {
    readonly authorityKey: Bytes;
  }

  /** @name PalletRolesProfileSharedRestakeProfile (408) */
  interface PalletRolesProfileSharedRestakeProfile extends Struct {
    readonly records: Vec<PalletRolesProfileRecord>;
    readonly amount: u128;
  }

  /** @name PalletJobsModuleCall (409) */
  interface PalletJobsModuleCall extends Enum {
    readonly isSubmitJob: boolean;
    readonly asSubmitJob: {
      readonly job: TanglePrimitivesJobsJobSubmission;
    } & Struct;
    readonly isSubmitJobResult: boolean;
    readonly asSubmitJobResult: {
      readonly jobKey: TanglePrimitivesJobsJobKey;
      readonly jobId: u32;
      readonly result: TanglePrimitivesJobsJobResult;
    } & Struct;
    readonly isWithdrawRewards: boolean;
    readonly isReportInactiveValidator: boolean;
    readonly asReportInactiveValidator: {
      readonly jobKey: TanglePrimitivesJobsJobKey;
      readonly jobId: u32;
      readonly validator: AccountId32;
      readonly offence: TanglePrimitivesJobsValidatorOffenceType;
      readonly signatures: Vec<Bytes>;
    } & Struct;
    readonly isSetPermittedCaller: boolean;
    readonly asSetPermittedCaller: {
      readonly jobKey: TanglePrimitivesJobsJobKey;
      readonly jobId: u32;
      readonly newPermittedCaller: AccountId32;
    } & Struct;
    readonly type: 'SubmitJob' | 'SubmitJobResult' | 'WithdrawRewards' | 'ReportInactiveValidator' | 'SetPermittedCaller';
  }

  /** @name TanglePrimitivesJobsJobResult (410) */
  interface TanglePrimitivesJobsJobResult extends Enum {
    readonly isDkgPhaseOne: boolean;
    readonly asDkgPhaseOne: TanglePrimitivesJobsDkgResult;
    readonly isDkgPhaseTwo: boolean;
    readonly asDkgPhaseTwo: TanglePrimitivesJobsDkgSignatureResult;
    readonly isZkSaaSPhaseOne: boolean;
    readonly asZkSaaSPhaseOne: TanglePrimitivesJobsZkSaaSCircuitResult;
    readonly isZkSaaSPhaseTwo: boolean;
    readonly asZkSaaSPhaseTwo: TanglePrimitivesJobsZkSaaSProofResult;
    readonly type: 'DkgPhaseOne' | 'DkgPhaseTwo' | 'ZkSaaSPhaseOne' | 'ZkSaaSPhaseTwo';
  }

  /** @name TanglePrimitivesJobsDkgResult (411) */
  interface TanglePrimitivesJobsDkgResult extends Struct {
    readonly keyType: TanglePrimitivesJobsDkgKeyType;
    readonly key: Bytes;
    readonly participants: Vec<Bytes>;
    readonly signatures: Vec<Bytes>;
    readonly threshold: u8;
  }

  /** @name TanglePrimitivesJobsDkgSignatureResult (412) */
  interface TanglePrimitivesJobsDkgSignatureResult extends Struct {
    readonly keyType: TanglePrimitivesJobsDkgKeyType;
    readonly data: Bytes;
    readonly signature: Bytes;
    readonly signingKey: Bytes;
  }

  /** @name TanglePrimitivesJobsZkSaaSCircuitResult (413) */
  interface TanglePrimitivesJobsZkSaaSCircuitResult extends Struct {
    readonly jobId: u32;
    readonly participants: Vec<SpCoreEcdsaPublic>;
  }

  /** @name SpCoreEcdsaPublic (415) */
  interface SpCoreEcdsaPublic extends U8aFixed {}

  /** @name TanglePrimitivesJobsZkSaaSProofResult (417) */
  interface TanglePrimitivesJobsZkSaaSProofResult extends Enum {
    readonly isArkworks: boolean;
    readonly asArkworks: TanglePrimitivesJobsArkworksProofResult;
    readonly isCircom: boolean;
    readonly asCircom: TanglePrimitivesJobsCircomProofResult;
    readonly type: 'Arkworks' | 'Circom';
  }

  /** @name TanglePrimitivesJobsArkworksProofResult (418) */
  interface TanglePrimitivesJobsArkworksProofResult extends Struct {
    readonly proof: Bytes;
  }

  /** @name TanglePrimitivesJobsCircomProofResult (419) */
  interface TanglePrimitivesJobsCircomProofResult extends Struct {
    readonly proof: Bytes;
  }

  /** @name TanglePrimitivesJobsValidatorOffenceType (420) */
  interface TanglePrimitivesJobsValidatorOffenceType extends Enum {
    readonly isInactivity: boolean;
    readonly isInvalidSignatureSubmitted: boolean;
    readonly isRejectedValidAction: boolean;
    readonly isApprovedInvalidAction: boolean;
    readonly type: 'Inactivity' | 'InvalidSignatureSubmitted' | 'RejectedValidAction' | 'ApprovedInvalidAction';
  }

  /** @name PalletDkgCall (421) */
  interface PalletDkgCall extends Enum {
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly feeInfo: PalletDkgFeeInfo;
    } & Struct;
    readonly type: 'SetFee';
  }

  /** @name PalletZksaasCall (422) */
  interface PalletZksaasCall extends Enum {
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly feeInfo: PalletZksaasFeeInfo;
    } & Struct;
    readonly type: 'SetFee';
  }

  /** @name PalletSudoError (423) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletBalancesBalanceLock (426) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (427) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (430) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name TangleTestnetRuntimeRuntimeHoldReason (434) */
  type TangleTestnetRuntimeRuntimeHoldReason = Null;

  /** @name PalletBalancesIdAmount (437) */
  interface PalletBalancesIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PalletBalancesError (439) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isExpendability: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyHolds: boolean;
    readonly isTooManyFreezes: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes';
  }

  /** @name PalletTransactionPaymentReleases (441) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name SpConsensusBabeDigestsPreDigest (448) */
  interface SpConsensusBabeDigestsPreDigest extends Enum {
    readonly isPrimary: boolean;
    readonly asPrimary: SpConsensusBabeDigestsPrimaryPreDigest;
    readonly isSecondaryPlain: boolean;
    readonly asSecondaryPlain: SpConsensusBabeDigestsSecondaryPlainPreDigest;
    readonly isSecondaryVRF: boolean;
    readonly asSecondaryVRF: SpConsensusBabeDigestsSecondaryVRFPreDigest;
    readonly type: 'Primary' | 'SecondaryPlain' | 'SecondaryVRF';
  }

  /** @name SpConsensusBabeDigestsPrimaryPreDigest (449) */
  interface SpConsensusBabeDigestsPrimaryPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
    readonly vrfSignature: SpCoreSr25519VrfVrfSignature;
  }

  /** @name SpCoreSr25519VrfVrfSignature (450) */
  interface SpCoreSr25519VrfVrfSignature extends Struct {
    readonly output: U8aFixed;
    readonly proof: U8aFixed;
  }

  /** @name SpConsensusBabeDigestsSecondaryPlainPreDigest (451) */
  interface SpConsensusBabeDigestsSecondaryPlainPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
  }

  /** @name SpConsensusBabeDigestsSecondaryVRFPreDigest (452) */
  interface SpConsensusBabeDigestsSecondaryVRFPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
    readonly vrfSignature: SpCoreSr25519VrfVrfSignature;
  }

  /** @name SpConsensusBabeBabeEpochConfiguration (453) */
  interface SpConsensusBabeBabeEpochConfiguration extends Struct {
    readonly c: ITuple<[u64, u64]>;
    readonly allowedSlots: SpConsensusBabeAllowedSlots;
  }

  /** @name PalletBabeError (455) */
  interface PalletBabeError extends Enum {
    readonly isInvalidEquivocationProof: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly isInvalidConfiguration: boolean;
    readonly type: 'InvalidEquivocationProof' | 'InvalidKeyOwnershipProof' | 'DuplicateOffenceReport' | 'InvalidConfiguration';
  }

  /** @name PalletGrandpaStoredState (456) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u64;
      readonly delay: u64;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u64;
      readonly delay: u64;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (457) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u64;
    readonly delay: u64;
    readonly nextAuthorities: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    readonly forced: Option<u64>;
  }

  /** @name PalletGrandpaError (459) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletIndicesError (461) */
  interface PalletIndicesError extends Enum {
    readonly isNotAssigned: boolean;
    readonly isNotOwner: boolean;
    readonly isInUse: boolean;
    readonly isNotTransfer: boolean;
    readonly isPermanent: boolean;
    readonly type: 'NotAssigned' | 'NotOwner' | 'InUse' | 'NotTransfer' | 'Permanent';
  }

  /** @name PalletDemocracyReferendumInfo (467) */
  interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u64;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PalletDemocracyReferendumStatus (468) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u64;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u64;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (469) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (470) */
  interface PalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean;
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly isDelegating: boolean;
    readonly asDelegating: {
      readonly balance: u128;
      readonly target: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly type: 'Direct' | 'Delegating';
  }

  /** @name PalletDemocracyDelegations (474) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (475) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u64, u128]> {}

  /** @name PalletDemocracyError (478) */
  interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isNoneWaiting: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isVotesExist: boolean;
    readonly isInstantNotAllowed: boolean;
    readonly isNonsense: boolean;
    readonly isWrongUpperBound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isTooMany: boolean;
    readonly isVotingPeriodLow: boolean;
    readonly isPreimageNotExist: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'ReferendumInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooMany' | 'VotingPeriodLow' | 'PreimageNotExist';
  }

  /** @name PalletCollectiveVotes (480) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u64;
  }

  /** @name PalletCollectiveError (481) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly isPrimeAccountNotMember: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength' | 'PrimeAccountNotMember';
  }

  /** @name PalletVestingReleases (484) */
  interface PalletVestingReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletVestingError (485) */
  interface PalletVestingError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams';
  }

  /** @name PalletElectionsPhragmenSeatHolder (487) */
  interface PalletElectionsPhragmenSeatHolder extends Struct {
    readonly who: AccountId32;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenVoter (488) */
  interface PalletElectionsPhragmenVoter extends Struct {
    readonly votes: Vec<AccountId32>;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenError (489) */
  interface PalletElectionsPhragmenError extends Enum {
    readonly isUnableToVote: boolean;
    readonly isNoVotes: boolean;
    readonly isTooManyVotes: boolean;
    readonly isMaximumVotesExceeded: boolean;
    readonly isLowBalance: boolean;
    readonly isUnableToPayBond: boolean;
    readonly isMustBeVoter: boolean;
    readonly isDuplicatedCandidate: boolean;
    readonly isTooManyCandidates: boolean;
    readonly isMemberSubmit: boolean;
    readonly isRunnerUpSubmit: boolean;
    readonly isInsufficientCandidateFunds: boolean;
    readonly isNotMember: boolean;
    readonly isInvalidWitnessData: boolean;
    readonly isInvalidVoteCount: boolean;
    readonly isInvalidRenouncing: boolean;
    readonly isInvalidReplacement: boolean;
    readonly type: 'UnableToVote' | 'NoVotes' | 'TooManyVotes' | 'MaximumVotesExceeded' | 'LowBalance' | 'UnableToPayBond' | 'MustBeVoter' | 'DuplicatedCandidate' | 'TooManyCandidates' | 'MemberSubmit' | 'RunnerUpSubmit' | 'InsufficientCandidateFunds' | 'NotMember' | 'InvalidWitnessData' | 'InvalidVoteCount' | 'InvalidRenouncing' | 'InvalidReplacement';
  }

  /** @name PalletElectionProviderMultiPhaseReadySolution (490) */
  interface PalletElectionProviderMultiPhaseReadySolution extends Struct {
    readonly supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>;
    readonly score: SpNposElectionsElectionScore;
    readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
  }

  /** @name PalletElectionProviderMultiPhaseRoundSnapshot (492) */
  interface PalletElectionProviderMultiPhaseRoundSnapshot extends Struct {
    readonly voters: Vec<ITuple<[AccountId32, u64, Vec<AccountId32>]>>;
    readonly targets: Vec<AccountId32>;
  }

  /** @name PalletElectionProviderMultiPhaseSignedSignedSubmission (499) */
  interface PalletElectionProviderMultiPhaseSignedSignedSubmission extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
    readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
    readonly callFee: u128;
  }

  /** @name PalletElectionProviderMultiPhaseError (500) */
  interface PalletElectionProviderMultiPhaseError extends Enum {
    readonly isPreDispatchEarlySubmission: boolean;
    readonly isPreDispatchWrongWinnerCount: boolean;
    readonly isPreDispatchWeakSubmission: boolean;
    readonly isSignedQueueFull: boolean;
    readonly isSignedCannotPayDeposit: boolean;
    readonly isSignedInvalidWitness: boolean;
    readonly isSignedTooMuchWeight: boolean;
    readonly isOcwCallWrongEra: boolean;
    readonly isMissingSnapshotMetadata: boolean;
    readonly isInvalidSubmissionIndex: boolean;
    readonly isCallNotAllowed: boolean;
    readonly isFallbackFailed: boolean;
    readonly isBoundNotMet: boolean;
    readonly isTooManyWinners: boolean;
    readonly type: 'PreDispatchEarlySubmission' | 'PreDispatchWrongWinnerCount' | 'PreDispatchWeakSubmission' | 'SignedQueueFull' | 'SignedCannotPayDeposit' | 'SignedInvalidWitness' | 'SignedTooMuchWeight' | 'OcwCallWrongEra' | 'MissingSnapshotMetadata' | 'InvalidSubmissionIndex' | 'CallNotAllowed' | 'FallbackFailed' | 'BoundNotMet' | 'TooManyWinners';
  }

  /** @name PalletStakingStakingLedger (501) */
  interface PalletStakingStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: Compact<u128>;
    readonly active: Compact<u128>;
    readonly unlocking: Vec<PalletStakingUnlockChunk>;
    readonly claimedRewards: Vec<u32>;
  }

  /** @name PalletStakingUnlockChunk (503) */
  interface PalletStakingUnlockChunk extends Struct {
    readonly value: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name PalletStakingNominations (506) */
  interface PalletStakingNominations extends Struct {
    readonly targets: Vec<AccountId32>;
    readonly submittedIn: u32;
    readonly suppressed: bool;
  }

  /** @name PalletStakingActiveEraInfo (507) */
  interface PalletStakingActiveEraInfo extends Struct {
    readonly index: u32;
    readonly start: Option<u64>;
  }

  /** @name PalletStakingEraRewardPoints (509) */
  interface PalletStakingEraRewardPoints extends Struct {
    readonly total: u32;
    readonly individual: BTreeMap<AccountId32, u32>;
  }

  /** @name PalletStakingUnappliedSlash (514) */
  interface PalletStakingUnappliedSlash extends Struct {
    readonly validator: AccountId32;
    readonly own: u128;
    readonly others: Vec<ITuple<[AccountId32, u128]>>;
    readonly reporters: Vec<AccountId32>;
    readonly payout: u128;
  }

  /** @name PalletStakingSlashingSlashingSpans (518) */
  interface PalletStakingSlashingSlashingSpans extends Struct {
    readonly spanIndex: u32;
    readonly lastStart: u32;
    readonly lastNonzeroSlash: u32;
    readonly prior: Vec<u32>;
  }

  /** @name PalletStakingSlashingSpanRecord (519) */
  interface PalletStakingSlashingSpanRecord extends Struct {
    readonly slashed: u128;
    readonly paidOut: u128;
  }

  /** @name PalletStakingPalletError (522) */
  interface PalletStakingPalletError extends Enum {
    readonly isNotController: boolean;
    readonly isNotStash: boolean;
    readonly isAlreadyBonded: boolean;
    readonly isAlreadyPaired: boolean;
    readonly isEmptyTargets: boolean;
    readonly isDuplicateIndex: boolean;
    readonly isInvalidSlashIndex: boolean;
    readonly isInsufficientBond: boolean;
    readonly isNoMoreChunks: boolean;
    readonly isNoUnlockChunk: boolean;
    readonly isFundedTarget: boolean;
    readonly isInvalidEraToReward: boolean;
    readonly isInvalidNumberOfNominations: boolean;
    readonly isNotSortedAndUnique: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isIncorrectHistoryDepth: boolean;
    readonly isIncorrectSlashingSpans: boolean;
    readonly isBadState: boolean;
    readonly isTooManyTargets: boolean;
    readonly isBadTarget: boolean;
    readonly isCannotChillOther: boolean;
    readonly isTooManyNominators: boolean;
    readonly isTooManyValidators: boolean;
    readonly isCommissionTooLow: boolean;
    readonly isBoundNotMet: boolean;
    readonly type: 'NotController' | 'NotStash' | 'AlreadyBonded' | 'AlreadyPaired' | 'EmptyTargets' | 'DuplicateIndex' | 'InvalidSlashIndex' | 'InsufficientBond' | 'NoMoreChunks' | 'NoUnlockChunk' | 'FundedTarget' | 'InvalidEraToReward' | 'InvalidNumberOfNominations' | 'NotSortedAndUnique' | 'AlreadyClaimed' | 'IncorrectHistoryDepth' | 'IncorrectSlashingSpans' | 'BadState' | 'TooManyTargets' | 'BadTarget' | 'CannotChillOther' | 'TooManyNominators' | 'TooManyValidators' | 'CommissionTooLow' | 'BoundNotMet';
  }

  /** @name SpCoreCryptoKeyTypeId (526) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (527) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name PalletTreasuryProposal (529) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name FrameSupportPalletId (531) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (532) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
  }

  /** @name PalletBountiesBounty (533) */
  interface PalletBountiesBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletBountiesBountyStatus (534) */
  interface PalletBountiesBountyStatus extends Enum {
    readonly isProposed: boolean;
    readonly isApproved: boolean;
    readonly isFunded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
      readonly updateDue: u64;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u64;
    } & Struct;
    readonly type: 'Proposed' | 'Approved' | 'Funded' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletBountiesError (536) */
  interface PalletBountiesError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isReasonTooBig: boolean;
    readonly isUnexpectedStatus: boolean;
    readonly isRequireCurator: boolean;
    readonly isInvalidValue: boolean;
    readonly isInvalidFee: boolean;
    readonly isPendingPayout: boolean;
    readonly isPremature: boolean;
    readonly isHasActiveChildBounty: boolean;
    readonly isTooManyQueued: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature' | 'HasActiveChildBounty' | 'TooManyQueued';
  }

  /** @name PalletChildBountiesChildBounty (537) */
  interface PalletChildBountiesChildBounty extends Struct {
    readonly parentBounty: u32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly status: PalletChildBountiesChildBountyStatus;
  }

  /** @name PalletChildBountiesChildBountyStatus (538) */
  interface PalletChildBountiesChildBountyStatus extends Enum {
    readonly isAdded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u64;
    } & Struct;
    readonly type: 'Added' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletChildBountiesError (539) */
  interface PalletChildBountiesError extends Enum {
    readonly isParentBountyNotActive: boolean;
    readonly isInsufficientBountyBalance: boolean;
    readonly isTooManyChildBounties: boolean;
    readonly type: 'ParentBountyNotActive' | 'InsufficientBountyBalance' | 'TooManyChildBounties';
  }

  /** @name PalletBagsListListNode (540) */
  interface PalletBagsListListNode extends Struct {
    readonly id: AccountId32;
    readonly prev: Option<AccountId32>;
    readonly next: Option<AccountId32>;
    readonly bagUpper: u64;
    readonly score: u64;
  }

  /** @name PalletBagsListListBag (541) */
  interface PalletBagsListListBag extends Struct {
    readonly head: Option<AccountId32>;
    readonly tail: Option<AccountId32>;
  }

  /** @name PalletBagsListError (543) */
  interface PalletBagsListError extends Enum {
    readonly isList: boolean;
    readonly asList: PalletBagsListListListError;
    readonly type: 'List';
  }

  /** @name PalletBagsListListListError (544) */
  interface PalletBagsListListListError extends Enum {
    readonly isDuplicate: boolean;
    readonly isNotHeavier: boolean;
    readonly isNotInSameBag: boolean;
    readonly isNodeNotFound: boolean;
    readonly type: 'Duplicate' | 'NotHeavier' | 'NotInSameBag' | 'NodeNotFound';
  }

  /** @name PalletNominationPoolsPoolMember (545) */
  interface PalletNominationPoolsPoolMember extends Struct {
    readonly poolId: u32;
    readonly points: u128;
    readonly lastRecordedRewardCounter: u128;
    readonly unbondingEras: BTreeMap<u32, u128>;
  }

  /** @name PalletNominationPoolsBondedPoolInner (550) */
  interface PalletNominationPoolsBondedPoolInner extends Struct {
    readonly commission: PalletNominationPoolsCommission;
    readonly memberCounter: u32;
    readonly points: u128;
    readonly roles: PalletNominationPoolsPoolRoles;
    readonly state: PalletNominationPoolsPoolState;
  }

  /** @name PalletNominationPoolsCommission (551) */
  interface PalletNominationPoolsCommission extends Struct {
    readonly current: Option<ITuple<[Perbill, AccountId32]>>;
    readonly max: Option<Perbill>;
    readonly changeRate: Option<PalletNominationPoolsCommissionChangeRate>;
    readonly throttleFrom: Option<u64>;
  }

  /** @name PalletNominationPoolsPoolRoles (554) */
  interface PalletNominationPoolsPoolRoles extends Struct {
    readonly depositor: AccountId32;
    readonly root: Option<AccountId32>;
    readonly nominator: Option<AccountId32>;
    readonly bouncer: Option<AccountId32>;
  }

  /** @name PalletNominationPoolsRewardPool (555) */
  interface PalletNominationPoolsRewardPool extends Struct {
    readonly lastRecordedRewardCounter: u128;
    readonly lastRecordedTotalPayouts: u128;
    readonly totalRewardsClaimed: u128;
    readonly totalCommissionPending: u128;
    readonly totalCommissionClaimed: u128;
  }

  /** @name PalletNominationPoolsSubPools (556) */
  interface PalletNominationPoolsSubPools extends Struct {
    readonly noEra: PalletNominationPoolsUnbondPool;
    readonly withEra: BTreeMap<u32, PalletNominationPoolsUnbondPool>;
  }

  /** @name PalletNominationPoolsUnbondPool (557) */
  interface PalletNominationPoolsUnbondPool extends Struct {
    readonly points: u128;
    readonly balance: u128;
  }

  /** @name PalletNominationPoolsError (563) */
  interface PalletNominationPoolsError extends Enum {
    readonly isPoolNotFound: boolean;
    readonly isPoolMemberNotFound: boolean;
    readonly isRewardPoolNotFound: boolean;
    readonly isSubPoolsNotFound: boolean;
    readonly isAccountBelongsToOtherPool: boolean;
    readonly isFullyUnbonding: boolean;
    readonly isMaxUnbondingLimit: boolean;
    readonly isCannotWithdrawAny: boolean;
    readonly isMinimumBondNotMet: boolean;
    readonly isOverflowRisk: boolean;
    readonly isNotDestroying: boolean;
    readonly isNotNominator: boolean;
    readonly isNotKickerOrDestroying: boolean;
    readonly isNotOpen: boolean;
    readonly isMaxPools: boolean;
    readonly isMaxPoolMembers: boolean;
    readonly isCanNotChangeState: boolean;
    readonly isDoesNotHavePermission: boolean;
    readonly isMetadataExceedsMaxLen: boolean;
    readonly isDefensive: boolean;
    readonly asDefensive: PalletNominationPoolsDefensiveError;
    readonly isPartialUnbondNotAllowedPermissionlessly: boolean;
    readonly isMaxCommissionRestricted: boolean;
    readonly isCommissionExceedsMaximum: boolean;
    readonly isCommissionExceedsGlobalMaximum: boolean;
    readonly isCommissionChangeThrottled: boolean;
    readonly isCommissionChangeRateNotAllowed: boolean;
    readonly isNoPendingCommission: boolean;
    readonly isNoCommissionCurrentSet: boolean;
    readonly isPoolIdInUse: boolean;
    readonly isInvalidPoolId: boolean;
    readonly isBondExtraRestricted: boolean;
    readonly type: 'PoolNotFound' | 'PoolMemberNotFound' | 'RewardPoolNotFound' | 'SubPoolsNotFound' | 'AccountBelongsToOtherPool' | 'FullyUnbonding' | 'MaxUnbondingLimit' | 'CannotWithdrawAny' | 'MinimumBondNotMet' | 'OverflowRisk' | 'NotDestroying' | 'NotNominator' | 'NotKickerOrDestroying' | 'NotOpen' | 'MaxPools' | 'MaxPoolMembers' | 'CanNotChangeState' | 'DoesNotHavePermission' | 'MetadataExceedsMaxLen' | 'Defensive' | 'PartialUnbondNotAllowedPermissionlessly' | 'MaxCommissionRestricted' | 'CommissionExceedsMaximum' | 'CommissionExceedsGlobalMaximum' | 'CommissionChangeThrottled' | 'CommissionChangeRateNotAllowed' | 'NoPendingCommission' | 'NoCommissionCurrentSet' | 'PoolIdInUse' | 'InvalidPoolId' | 'BondExtraRestricted';
  }

  /** @name PalletNominationPoolsDefensiveError (564) */
  interface PalletNominationPoolsDefensiveError extends Enum {
    readonly isNotEnoughSpaceInUnbondPool: boolean;
    readonly isPoolNotFound: boolean;
    readonly isRewardPoolNotFound: boolean;
    readonly isSubPoolsNotFound: boolean;
    readonly isBondedStashKilledPrematurely: boolean;
    readonly type: 'NotEnoughSpaceInUnbondPool' | 'PoolNotFound' | 'RewardPoolNotFound' | 'SubPoolsNotFound' | 'BondedStashKilledPrematurely';
  }

  /** @name PalletSchedulerScheduled (567) */
  interface PalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u64, u32]>>;
    readonly origin: TangleTestnetRuntimeOriginCaller;
  }

  /** @name PalletSchedulerError (569) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name PalletPreimageRequestStatus (570) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly deposit: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly deposit: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly len: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (573) */
  interface PalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
  }

  /** @name SpStakingOffenceOffenceDetails (574) */
  interface SpStakingOffenceOffenceDetails extends Struct {
    readonly offender: ITuple<[AccountId32, PalletStakingExposure]>;
    readonly reporters: Vec<AccountId32>;
  }

  /** @name PalletTransactionPauseModuleError (576) */
  interface PalletTransactionPauseModuleError extends Enum {
    readonly isCannotPause: boolean;
    readonly isInvalidCharacter: boolean;
    readonly type: 'CannotPause' | 'InvalidCharacter';
  }

  /** @name PalletImOnlineError (579) */
  interface PalletImOnlineError extends Enum {
    readonly isInvalidKey: boolean;
    readonly isDuplicatedHeartbeat: boolean;
    readonly type: 'InvalidKey' | 'DuplicatedHeartbeat';
  }

  /** @name PalletIdentityRegistration (580) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (588) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (590) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyFields: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed';
  }

  /** @name PalletUtilityError (591) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name FpRpcTransactionStatus (594) */
  interface FpRpcTransactionStatus extends Struct {
    readonly transactionHash: H256;
    readonly transactionIndex: u32;
    readonly from: H160;
    readonly to: Option<H160>;
    readonly contractAddress: Option<H160>;
    readonly logs: Vec<EthereumLog>;
    readonly logsBloom: EthbloomBloom;
  }

  /** @name EthereumReceiptReceiptV3 (597) */
  interface EthereumReceiptReceiptV3 extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: EthereumReceiptEip658ReceiptData;
    readonly isEip2930: boolean;
    readonly asEip2930: EthereumReceiptEip658ReceiptData;
    readonly isEip1559: boolean;
    readonly asEip1559: EthereumReceiptEip658ReceiptData;
    readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
  }

  /** @name EthereumReceiptEip658ReceiptData (598) */
  interface EthereumReceiptEip658ReceiptData extends Struct {
    readonly statusCode: u8;
    readonly usedGas: U256;
    readonly logsBloom: EthbloomBloom;
    readonly logs: Vec<EthereumLog>;
  }

  /** @name EthereumBlock (599) */
  interface EthereumBlock extends Struct {
    readonly header: EthereumHeader;
    readonly transactions: Vec<EthereumTransactionTransactionV2>;
    readonly ommers: Vec<EthereumHeader>;
  }

  /** @name EthereumHeader (600) */
  interface EthereumHeader extends Struct {
    readonly parentHash: H256;
    readonly ommersHash: H256;
    readonly beneficiary: H160;
    readonly stateRoot: H256;
    readonly transactionsRoot: H256;
    readonly receiptsRoot: H256;
    readonly logsBloom: EthbloomBloom;
    readonly difficulty: U256;
    readonly number: U256;
    readonly gasLimit: U256;
    readonly gasUsed: U256;
    readonly timestamp: u64;
    readonly extraData: Bytes;
    readonly mixHash: H256;
    readonly nonce: EthereumTypesHashH64;
  }

  /** @name PalletEthereumError (605) */
  interface PalletEthereumError extends Enum {
    readonly isInvalidSignature: boolean;
    readonly isPreLogExists: boolean;
    readonly type: 'InvalidSignature' | 'PreLogExists';
  }

  /** @name PalletEvmCodeMetadata (606) */
  interface PalletEvmCodeMetadata extends Struct {
    readonly size_: u64;
    readonly hash_: H256;
  }

  /** @name PalletEvmError (608) */
  interface PalletEvmError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isFeeOverflow: boolean;
    readonly isPaymentOverflow: boolean;
    readonly isWithdrawFailed: boolean;
    readonly isGasPriceTooLow: boolean;
    readonly isInvalidNonce: boolean;
    readonly isGasLimitTooLow: boolean;
    readonly isGasLimitTooHigh: boolean;
    readonly isUndefined: boolean;
    readonly isReentrancy: boolean;
    readonly isTransactionMustComeFromEOA: boolean;
    readonly type: 'BalanceLow' | 'FeeOverflow' | 'PaymentOverflow' | 'WithdrawFailed' | 'GasPriceTooLow' | 'InvalidNonce' | 'GasLimitTooLow' | 'GasLimitTooHigh' | 'Undefined' | 'Reentrancy' | 'TransactionMustComeFromEOA';
  }

  /** @name PalletHotfixSufficientsError (609) */
  interface PalletHotfixSufficientsError extends Enum {
    readonly isMaxAddressCountExceeded: boolean;
    readonly type: 'MaxAddressCountExceeded';
  }

  /** @name PalletAirdropClaimsError (611) */
  interface PalletAirdropClaimsError extends Enum {
    readonly isInvalidEthereumSignature: boolean;
    readonly isInvalidNativeSignature: boolean;
    readonly isInvalidNativeAccount: boolean;
    readonly isSignerHasNoClaim: boolean;
    readonly isSenderHasNoClaim: boolean;
    readonly isPotUnderflow: boolean;
    readonly isInvalidStatement: boolean;
    readonly isVestedBalanceExists: boolean;
    readonly type: 'InvalidEthereumSignature' | 'InvalidNativeSignature' | 'InvalidNativeAccount' | 'SignerHasNoClaim' | 'SenderHasNoClaim' | 'PotUnderflow' | 'InvalidStatement' | 'VestedBalanceExists';
  }

  /** @name EthTypesClientMode (613) */
  interface EthTypesClientMode extends Enum {
    readonly isSubmitLightClientUpdate: boolean;
    readonly isSubmitHeader: boolean;
    readonly type: 'SubmitLightClientUpdate' | 'SubmitHeader';
  }

  /** @name WebbConsensusTypesNetworkConfig (614) */
  interface WebbConsensusTypesNetworkConfig extends Struct {
    readonly genesisValidatorsRoot: U8aFixed;
    readonly bellatrixForkVersion: U8aFixed;
    readonly bellatrixForkEpoch: u64;
    readonly capellaForkVersion: U8aFixed;
    readonly capellaForkEpoch: u64;
  }

  /** @name PalletEth2LightClientError (615) */
  interface PalletEth2LightClientError extends Enum {
    readonly isAlreadyInitialized: boolean;
    readonly isLightClientUpdateNotAllowed: boolean;
    readonly isBlockAlreadySubmitted: boolean;
    readonly isUnknownParentHeader: boolean;
    readonly isNotTrustedSigner: boolean;
    readonly isValidateUpdatesParameterError: boolean;
    readonly isTrustlessModeError: boolean;
    readonly isInvalidSyncCommitteeBitsSum: boolean;
    readonly isSyncCommitteeBitsSumLessThanThreshold: boolean;
    readonly isInvalidNetworkConfig: boolean;
    readonly isInvalidBlsSignature: boolean;
    readonly isInvalidExecutionBlock: boolean;
    readonly isActiveHeaderSlotLessThanFinalizedSlot: boolean;
    readonly isUpdateHeaderSlotLessThanFinalizedHeaderSlot: boolean;
    readonly isUpdateSignatureSlotLessThanAttestedHeaderSlot: boolean;
    readonly isInvalidUpdatePeriod: boolean;
    readonly isInvalidFinalityProof: boolean;
    readonly isInvalidExecutionBlockHashProof: boolean;
    readonly isNextSyncCommitteeNotPresent: boolean;
    readonly isInvalidNextSyncCommitteeProof: boolean;
    readonly isFinalizedExecutionHeaderNotPresent: boolean;
    readonly isFinalizedBeaconHeaderNotPresent: boolean;
    readonly isUnfinalizedHeaderNotPresent: boolean;
    readonly isSyncCommitteeUpdateNotPresent: boolean;
    readonly isHeaderHashDoesNotExist: boolean;
    readonly isBlockHashesDoNotMatch: boolean;
    readonly isInvalidSignaturePeriod: boolean;
    readonly isCurrentSyncCommitteeNotSet: boolean;
    readonly isNextSyncCommitteeNotSet: boolean;
    readonly isInvalidClientMode: boolean;
    readonly isHashesGcThresholdInsufficient: boolean;
    readonly isChainCannotBeClosed: boolean;
    readonly type: 'AlreadyInitialized' | 'LightClientUpdateNotAllowed' | 'BlockAlreadySubmitted' | 'UnknownParentHeader' | 'NotTrustedSigner' | 'ValidateUpdatesParameterError' | 'TrustlessModeError' | 'InvalidSyncCommitteeBitsSum' | 'SyncCommitteeBitsSumLessThanThreshold' | 'InvalidNetworkConfig' | 'InvalidBlsSignature' | 'InvalidExecutionBlock' | 'ActiveHeaderSlotLessThanFinalizedSlot' | 'UpdateHeaderSlotLessThanFinalizedHeaderSlot' | 'UpdateSignatureSlotLessThanAttestedHeaderSlot' | 'InvalidUpdatePeriod' | 'InvalidFinalityProof' | 'InvalidExecutionBlockHashProof' | 'NextSyncCommitteeNotPresent' | 'InvalidNextSyncCommitteeProof' | 'FinalizedExecutionHeaderNotPresent' | 'FinalizedBeaconHeaderNotPresent' | 'UnfinalizedHeaderNotPresent' | 'SyncCommitteeUpdateNotPresent' | 'HeaderHashDoesNotExist' | 'BlockHashesDoNotMatch' | 'InvalidSignaturePeriod' | 'CurrentSyncCommitteeNotSet' | 'NextSyncCommitteeNotSet' | 'InvalidClientMode' | 'HashesGcThresholdInsufficient' | 'ChainCannotBeClosed';
  }

  /** @name PalletRolesRoleStakingLedger (616) */
  interface PalletRolesRoleStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: Compact<u128>;
    readonly profile: PalletRolesProfile;
    readonly roles: BTreeMap<TanglePrimitivesRolesRoleType, PalletRolesProfileRecord>;
  }

  /** @name PalletRolesError (621) */
  interface PalletRolesError extends Enum {
    readonly isNotValidator: boolean;
    readonly isHasRoleAssigned: boolean;
    readonly isRoleNotAssigned: boolean;
    readonly isMaxRoles: boolean;
    readonly isRoleCannotBeRemoved: boolean;
    readonly isRestakingAmountCannotBeUpdated: boolean;
    readonly isExceedsMaxRestakeValue: boolean;
    readonly isInsufficientRestakingBond: boolean;
    readonly isProfileUpdateFailed: boolean;
    readonly isProfileAlreadyExists: boolean;
    readonly isNoProfileFound: boolean;
    readonly isProfileDeleteRequestFailed: boolean;
    readonly type: 'NotValidator' | 'HasRoleAssigned' | 'RoleNotAssigned' | 'MaxRoles' | 'RoleCannotBeRemoved' | 'RestakingAmountCannotBeUpdated' | 'ExceedsMaxRestakeValue' | 'InsufficientRestakingBond' | 'ProfileUpdateFailed' | 'ProfileAlreadyExists' | 'NoProfileFound' | 'ProfileDeleteRequestFailed';
  }

  /** @name TanglePrimitivesJobsJobInfo (622) */
  interface TanglePrimitivesJobsJobInfo extends Struct {
    readonly owner: AccountId32;
    readonly expiry: u64;
    readonly jobType: TanglePrimitivesJobsJobType;
    readonly fee: u128;
  }

  /** @name TanglePrimitivesJobsPhaseOneResult (623) */
  interface TanglePrimitivesJobsPhaseOneResult extends Struct {
    readonly owner: AccountId32;
    readonly expiry: u64;
    readonly result: Bytes;
    readonly permittedCaller: Option<AccountId32>;
    readonly keyType: Option<TanglePrimitivesJobsDkgKeyType>;
    readonly jobType: TanglePrimitivesJobsJobType;
  }

  /** @name PalletJobsModuleError (625) */
  interface PalletJobsModuleError extends Enum {
    readonly isInvalidJobPhase: boolean;
    readonly isInvalidValidator: boolean;
    readonly isInvalidJobParams: boolean;
    readonly isPreviousResultNotFound: boolean;
    readonly isResultExpired: boolean;
    readonly isJobAlreadyExpired: boolean;
    readonly isJobNotFound: boolean;
    readonly isPhaseOneResultNotFound: boolean;
    readonly isNoRewards: boolean;
    readonly isNotEnoughValidators: boolean;
    readonly isEmptyResult: boolean;
    readonly isEmptyJob: boolean;
    readonly isValidatorMetadataNotFound: boolean;
    readonly isResultNotExpectedType: boolean;
    readonly isNoPermission: boolean;
    readonly type: 'InvalidJobPhase' | 'InvalidValidator' | 'InvalidJobParams' | 'PreviousResultNotFound' | 'ResultExpired' | 'JobAlreadyExpired' | 'JobNotFound' | 'PhaseOneResultNotFound' | 'NoRewards' | 'NotEnoughValidators' | 'EmptyResult' | 'EmptyJob' | 'ValidatorMetadataNotFound' | 'ResultNotExpectedType' | 'NoPermission';
  }

  /** @name PalletDkgError (626) */
  interface PalletDkgError extends Enum {
    readonly isCannotRetreiveSigner: boolean;
    readonly isNotEnoughSigners: boolean;
    readonly isInvalidSignatureData: boolean;
    readonly isNoParticipantsFound: boolean;
    readonly isNoSignaturesFound: boolean;
    readonly isInvalidJobType: boolean;
    readonly isDuplicateSignature: boolean;
    readonly isInvalidSignature: boolean;
    readonly isSigningKeyMismatch: boolean;
    readonly isInvalidParticipantPublicKey: boolean;
    readonly type: 'CannotRetreiveSigner' | 'NotEnoughSigners' | 'InvalidSignatureData' | 'NoParticipantsFound' | 'NoSignaturesFound' | 'InvalidJobType' | 'DuplicateSignature' | 'InvalidSignature' | 'SigningKeyMismatch' | 'InvalidParticipantPublicKey';
  }

  /** @name PalletZksaasError (627) */
  interface PalletZksaasError extends Enum {
    readonly isInvalidJobType: boolean;
    readonly isInvalidProof: boolean;
    readonly isMalformedProof: boolean;
    readonly type: 'InvalidJobType' | 'InvalidProof' | 'MalformedProof';
  }

  /** @name SpRuntimeMultiSignature (629) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEcdsaSignature (630) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (632) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (633) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (634) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (635) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (638) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (639) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (640) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name TangleTestnetRuntimeRuntime (642) */
  type TangleTestnetRuntimeRuntime = Null;

} // declare module
