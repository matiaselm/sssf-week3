# sssf-week3 - chargemap with graphql

[Deployed GraphQL interface here](http://first-node-env.jelastic.metropolia.fi/graphql)

Example query:
```
query {
  stations{
    Title
    Connections{
      Quantity
      Level{
        Title
        Comments
        IsFastChargeCapable
      }
      CurrentTypeID{
        id
      	Description
        Title
      }
    	ConnectionType{
        FormalName
        Title
      }
    }
  }
}

```
