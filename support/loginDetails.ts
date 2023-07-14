const commonPassword = 'secret_sauce'

export const loginDetails_workingUsers: User[] = [
    {
        username: "standard_user",
        password: commonPassword,
        authFilePath: "/standard.json"
    },
    {
        username: "problem_user",
        password: commonPassword,
        "authFilePath": "/problem.json"
    }
]

export const loginDetails_lockedUser: User = {
    username: "locked_out_user",
    password: commonPassword,
    authFilePath: "/locked.json"
}

export type User = {
    username: string,
    password: string,
    authFilePath: string
}