
//This file will tell that what will be the structureof your data.


//schema

const { gql } = require('graphql-tag')


//STRING 
//INT
//FLOAT
//BOOLEAN
//ID-id   unique identifier 

//in mongoose _id is equal to ID


//after types then querys in that like one userInformationid(req.params.id)(/api/user/124) or alluserInformation
//first:String! its like mandatory filed (!)

//TYPE=>QUERY=>MUTATIONS

//in mutationsreq.body in node js 
const typeDefs = gql`
type DriveInforamation{
    id:ID!,
    first:String!,
    last:String!
    drivercode:Float!
    primaryEmail:String!
    phone:Float!
    country:String!
    isAvailable:Boolean!
}

type Query{
    driveInforamations:[DriveInforamation!]!
    driveInforamation(id:ID!):DriveInforamation
}


type Mutation{
    createDriver(
        first:String!
        last:String!
        drivercode:Float!
        primaryEmail:String!
        phone:Float!
        country:String!
        isAvailable:Boolean!
    ):DriveInforamation

    deleteDriver(id:ID!):Boolean

    updateDriver(
        id:ID!
        first:String
        last:String
        drivercode:Float
        primaryEmail:String
        phone:Float
        country:String
        isAvailable:Boolean
    ):DriveInforamation
}

`

module.exports = typeDefs;