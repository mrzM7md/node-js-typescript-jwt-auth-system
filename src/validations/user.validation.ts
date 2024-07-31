import { check } from "express-validator"

export const store_user_vakidation =() => {
    return [
        check("AName"),
    ]
}