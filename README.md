# FindS-Signature
a tool for  api signature of FindS

## Installing

Using npm:

```bash
$npm install finds-signature
```

## Features

- Sign with the api params for FindS

## Test

```bash
mocha
```

## API

##### sign({ apiName, params, timestamp, sis, sik })

```js
//sign for the locate api
sign ({
    apiName: 'gpsp.point.locate',
    params:{
        bizType: 'general',
        entityNames: 'eid12345678',
        activeTime: '30',
        fields: `["lon","lat","gtm","altitude"]`,
    },
    timestamp: new Date().getTime(),
    sis: `${你账户对应的sis}`,
    sik: `${您账户对应的sik}`,
})
```

##License

MIT