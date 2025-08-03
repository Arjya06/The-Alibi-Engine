
export interface AlibiFormData {
  scenario: string;
  context: string;
  urgency: string;
  believability: string;
  apologyType: string;
  language: string;
}

export interface AlibiProof {
  type: string;
  content: string;
}

export interface Alibi {
  rank: number;
  effectiveness: string;
  excuse: string;
  apology: string;
  proof: AlibiProof;
}

export interface AlibiResponse {
  alibis: Alibi[];
}
