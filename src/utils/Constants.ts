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
    MISSING='MISSING',
    NOTRETURNED='NOTRETURNED',
    DAMAGED='DAMAGED',
    INCUSTODY='INCUSTODY'
}


interface IUser extends Document {
    username: string,
    emailAddress: string,
    companyName: string,
    phoneNumber: string
}

interface IItemEvent {
    _id: string,
    itemId: string,
    custodian: IUser,
    updatedBy: string
    createdAt: Date,
    location: string,
}

interface IItem {
    _id: string;
    name: string;
    color: string;
    serialNumber: string;
    createdAt: Date,
    createdBy: string;
    status: Status;
}

interface RegistrationFormData {
    username: string,
    emailAddress: string,
    address: string,
    companyName: string,
    city: string,
    country: string,
    phoneNumber: string,
    password: string
}

export { TOKEN_KEY, SERVER_URL };
export type { LoginApiResponse, IItemEvent, Status, IItem, SuccessfulApiResponse, RegistrationFormData, UnSuccessfulApiResponse };
