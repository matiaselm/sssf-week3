# sssf-node-exercise - chargemap with graphql

~~[Deployed GraphQL interface here](http://first-node-env.jelastic.metropolia.fi/graphql)~~ will be there later

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
