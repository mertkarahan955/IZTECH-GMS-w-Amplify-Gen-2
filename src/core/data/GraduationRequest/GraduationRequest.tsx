type Role = "Advisor" | "Secretary" | "Dean" | "Affairs";
export enum  RequestStatus {
  Pending = "PENDING",
  Accepted = "ACCEPTED",
  Rejected = "REJECTED",
}

export class GraduationRequest {
  id: string;
  studentName: string;
  title: string;
  currentHandler: Role;
  letters: Partial<Record<"student"|"advisor" | "secretary" | "dean" | "affairs", string>>;
  status: RequestStatus;

  constructor(
    id: string,
    studentName: string,
    title: string,
    currentHandler: Role,
    letters: Partial<Record<"student" |"advisor" | "secretary" | "dean" | "affairs", string>> = {},
    status:   RequestStatus = RequestStatus.Pending
  ) {
    this.id = id;
    this.studentName = studentName;
    this.title = title;
    this.currentHandler = currentHandler;
    this.letters = letters;
    this.status = status;
  }

  addLetter(role: Role, content: string, nextHandler?: Role): void {
    const roleKey = role.toLowerCase() as keyof typeof this.letters;
    this.letters[roleKey] = content;

    if (nextHandler) {
      this.currentHandler = nextHandler;
    }

    if (role === "Affairs" && nextHandler === undefined) {
      this.status = RequestStatus.Accepted;
    }
  }
}




export const updateRequestHandler = (
  requestId: string,
  requests: GraduationRequest[], // Array of GraduationRequest objects
  role: "Advisor" | "Secretary" | "Dean" | "Affairs",
  letterContent: string,
  nextHandler?: "Advisor" | "Secretary" | "Dean" | "Affairs"
): void => {
  // Find the request by ID
  const request = requests.find((req) => req.id === requestId);

  if (!request) {
    console.error(`Request with ID ${requestId} not found.`);
    return;
  }

  // Add the letter and update the handler
  request.addLetter(role, letterContent, nextHandler);

  console.log(`Request ${requestId} updated successfully.`);
  console.log("Updated Request:", request);
};