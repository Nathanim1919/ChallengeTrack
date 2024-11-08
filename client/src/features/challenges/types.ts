// Types for complex types
export interface ChallengeResponse extends ApiResponse<IChallenge> {}
export interface ChallangeListResponse extends ApiResponse<IChallenge[]> {}
export interface ParticipationStatusResponse extends ApiResponse<boolean> {}

export interface JoinLeaveResponse {
  updatedChallenge: ChallangeListResponse;
  isParticipant: ParticipationStatusResponse;
}

export interface ChallengeDetailResponse {
  challenge: ChallengeResponse;
  isParticipant: ParticipationStatusResponse,
  isOwner: ParticipationStatusResponse
}