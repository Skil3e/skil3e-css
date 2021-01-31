export type UtilityValue = {
    key: string
    val: string
}
export type Utility = {
    filename: string
    prefix: string[]
    utility: string
    divider: string
    values: UtilityValue[]
    variables: string
}
