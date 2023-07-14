const commonPassword = 'secret_sauce'

export const loginDetails_workingUsers: User[] = [
    {
        username: "standard_user",
        password: commonPassword
    },
    {
        username: "problem_user",
        password: commonPassword
    }
]

export type User = {
    username: string,
    password: string
}