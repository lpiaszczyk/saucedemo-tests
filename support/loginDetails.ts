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

export const loginDetails_lockedUser: User = {
    username: "locked_out_user",
    password: commonPassword
}

export type User = {
    username: string,
    password: string
}