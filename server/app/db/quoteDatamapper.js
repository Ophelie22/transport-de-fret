const client = require('./db');

module.exports = {

    // Affiche toutes les quotes d'un USER ( ID )
    findAllQuotesForUserId : async (userID) => {
        const results = await client.query(
            'SELECT * FROM "user" LEFT JOIN "shipment" ON "user".id = shipment.user_id LEFT JOIN "quote" ON "shipment".id = shipment.quote_id  WHERE "user".id = $1 ',
            // 'SELECT * FROM "user" LEFT JOIN "shipment" ON "user".id = shipment.user_id WHERE "user".id = $1',
            [userID]
        );

        // console.log(results.rows);
        return results.rows;
    },

    // Créé un Devis grâce aux informations d'un formulaire
    createQuote : async (quoteBody) => {
        const result = await client.query(
            'INSERT INTO "quote" ("ref_quote","nbr_pallets","distance","price","length","width","height","weight","comments" ',
            [
                quoteBody.ref_quote ,
                quoteBody.nbr_pallets ,
                quoteBody.distance ,
                quoteBody.price ,
                quoteBody.length ,
                quoteBody.width ,
                quoteBody.height ,
                quoteBody.weight ,
                quoteBody.comments
            ]
        )
    },

    // Modifie les informations d'un Devis
    editQuote : async () => {


    },

    // Supprime (soft) une quote en identidiant l'ID
    softDeleteQuote : async () => {

    },

    



}