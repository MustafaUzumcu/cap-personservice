const cds = require("@sap/cds");

module.exports = cds.service.impl(async function () {

  this.on('READ', "Person", async (req, rej) => {
    const bupa = await cds.connect.to("ZBTP_PERSON_SRV");
    const { PersonListSet } = bupa.entities;
    let aData = await bupa.run(
      SELECT.from(PersonListSet)
    );
    aData.$count = aData.length;
    return aData;
  });

  this.on('Delete', async (req, rej) => {
    const bupa = await cds.connect.to("ZBTP_PERSON_SRV");
    const pernr = req.data.body[0].Pernr;
    const { PersonDeleteSet } = bupa.entities;
    let aData = await bupa.run(SELECT.from(PersonDeleteSet).where({
      id: pernr,
    }));
    debugger;
  });

  this.on("Create", async (req, rej) => {
    const bupa = await cds.connect.to("ZBTP_PERSON_SRV");
    const endpoint = "PersonCreateSet";
    req.query = `POST ${endpoint}`;

     try {
      const aData = await bupa.tx(req).run(req.query, req.data.body);
      return aData;git 
     } catch (error) {
      let x = 'y';
     }

  

  });

});