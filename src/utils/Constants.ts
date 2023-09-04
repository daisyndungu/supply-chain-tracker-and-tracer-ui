const SERVER_URL = process.env.REACT_APP_SERVER_URL

const TOKEN_KEY="authToken"

interface LoginApiResponse {
    token: string;
}

interface SuccessfulApiResponse {
    message: string;
}

interface UnSuccessfulApiResponse {
    error: string;
}

enum Status {
    Dispatched = 'DISPATCHED',
    Pending = 'PENDING',
    Closed = 'CLOSED',
    InProgress = 'INPROGRESS',
    Cancelled = 'CANCELLED',
    DELIVERED = 'DELIVERED'
}

interface IItemEvent {
    _id: string,
    itemId: string,
    custodianId: string,
    updatedBy: string
    createdAt: Date,
    location: string,
    status: Status,
}

interface IItem { // TODO - refactor(move to utils)
    _id: string;
    name: string;
    color: string;
    serialNumber: string;
    createdAt: Date,
    consumerId: string; // TODO custodian
    createdBy: string;
    status: string; //add status eg missing, returned, notreturned
}

interface RegistrationFormData {
    username: string,
    emailAddress: string,
    address: string,
    companyName: string,
    city: string,
    country: string,
    phoneNumber: string, // Peform phone number verification
    // userRole: UserRole,//TODO
    password: string
}

export { TOKEN_KEY, SERVER_URL };
export type { LoginApiResponse, IItemEvent, Status, IItem, SuccessfulApiResponse, RegistrationFormData, UnSuccessfulApiResponse };
