
export const GetFirstName = (fullName: string): string => {
    const firstName = fullName.split(" ").slice(-1)[0];
    return firstName;
}