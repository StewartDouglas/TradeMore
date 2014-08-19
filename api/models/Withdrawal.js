/**
 * Withdrawal
 *
 * @module      :: Model
 * @description :: Description of withdrawals from the deposit escrow accounts
 */

module.exports = {

  schema: true,

  attributes: {
  	
  	// signed raw transaction
  	signature : {
  		type: 'string'
  	},

  	lenderID: {
  		type: 'integer'
  	},

  	outstanding: {
  		type: 'boolean'
  	},

  	transactionID: {
  		type: 'integer'
  	},

  	loanID: {
  		type: 'integer'
  	},

    // signed by platform
    unsignedtx: {
      type: 'string'
    }

  }

};