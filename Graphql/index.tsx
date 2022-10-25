import { gql } from '@apollo/client'
import client from './apollo-client'

export function HomeService (){
    return client.query({
        query:gql`
        query{
            products{
              data{
                id
                attributes{
                  product_name
                }
                }
              }
            }
        `
    })
}