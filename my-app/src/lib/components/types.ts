/**
 * This interface defines body
 */
export interface IBody {

    /**
     * Name of the person
     */
    name: name

    /**
     * Surname of the person
     */
    surname?: string
}

export type name = 'Adam'

export type currency = 'CZK' | 'EUR' | 'USD'

export interface IPaymentOptions {
    // curr: currency
    curr: currency
}