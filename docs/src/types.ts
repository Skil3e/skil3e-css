export type UtilityValue = {
    key: string
    val: string
}
export type Utility = {
    filename: string
    prefix: string[]
    utility: string
    divider: string
    withPosition: boolean
    values: UtilityValue[]
    variables: string
}
