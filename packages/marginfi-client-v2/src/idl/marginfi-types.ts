export type Marginfi = {
  version: "0.1.0";
  name: "marginfi";
  instructions: [
    {
      name: "marginfiGroupInitialize";
      accounts: [
        {
          name: "marginfiGroup";
          isMut: true;
          isSigner: true;
        },
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "marginfiGroupConfigure";
      accounts: [
        {
          name: "marginfiGroup";
          isMut: true;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "config";
          type: {
            defined: "GroupConfig";
          };
        }
      ];
    },
    {
      name: "lendingPoolAddBank";
      accounts: [
        {
          name: "marginfiGroup";
          isMut: false;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "bankMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "bank";
          isMut: true;
          isSigner: true;
        },
        {
          name: "liquidityVaultAuthority";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "liquidity_vault_auth";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "liquidityVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "liquidity_vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "insuranceVaultAuthority";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "insurance_vault_auth";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "insuranceVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "insurance_vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "feeVaultAuthority";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "fee_vault_auth";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "feeVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "fee_vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bankConfig";
          type: {
            defined: "BankConfig";
          };
        }
      ];
    },
    {
      name: "lendingPoolConfigureBank";
      accounts: [
        {
          name: "marginfiGroup";
          isMut: false;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: false;
          isSigner: true;
        },
        {
          name: "bank";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "bankConfigOpt";
          type: {
            defined: "BankConfigOpt";
          };
        }
      ];
    },
    {
      name: "lendingPoolSetupEmissions";
      accounts: [
        {
          name: "marginfiGroup";
          isMut: false;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "bank";
          isMut: true;
          isSigner: false;
        },
        {
          name: "emissionsMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "emissionsAuth";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "emissions_auth_seed";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Mint";
                path: "emissions_mint";
              }
            ];
          };
        },
        {
          name: "emissionsTokenAccount";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "emissions_token_account_seed";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Mint";
                path: "emissions_mint";
              }
            ];
          };
        },
        {
          name: "emissionsFundingAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "flags";
          type: "u64";
        },
        {
          name: "rate";
          type: "u64";
        },
        {
          name: "totalEmissions";
          type: "u64";
        }
      ];
    },
    {
      name: "lendingPoolHandleBankruptcy";
      docs: ["Handle bad debt of a bankrupt marginfi account for a given bank."];
      accounts: [
        {
          name: "marginfiGroup";
          isMut: false;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: false;
          isSigner: true;
        },
        {
          name: "bank";
          isMut: true;
          isSigner: false;
        },
        {
          name: "marginfiAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "liquidityVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "liquidity_vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "insuranceVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "insurance_vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "insuranceVaultAuthority";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "insurance_vault_auth";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "marginfiAccountInitialize";
      docs: ["Initialize a marginfi account for a given group"];
      accounts: [
        {
          name: "marginfiGroup";
          isMut: false;
          isSigner: false;
        },
        {
          name: "marginfiAccount";
          isMut: true;
          isSigner: true;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "feePayer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "lendingAccountDeposit";
      accounts: [
        {
          name: "marginfiGroup";
          isMut: false;
          isSigner: false;
        },
        {
          name: "marginfiAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "signer";
          isMut: false;
          isSigner: true;
        },
        {
          name: "bank";
          isMut: true;
          isSigner: false;
        },
        {
          name: "signerTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "bankLiquidityVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "liquidity_vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "lendingAccountRepay";
      accounts: [
        {
          name: "marginfiGroup";
          isMut: false;
          isSigner: false;
        },
        {
          name: "marginfiAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "signer";
          isMut: false;
          isSigner: true;
        },
        {
          name: "bank";
          isMut: true;
          isSigner: false;
        },
        {
          name: "signerTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "bankLiquidityVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "liquidity_vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
        {
          name: "repayAll";
          type: {
            option: "bool";
          };
        }
      ];
    },
    {
      name: "lendingAccountWithdraw";
      accounts: [
        {
          name: "marginfiGroup";
          isMut: false;
          isSigner: false;
        },
        {
          name: "marginfiAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "signer";
          isMut: false;
          isSigner: true;
        },
        {
          name: "bank";
          isMut: true;
          isSigner: false;
        },
        {
          name: "destinationTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "bankLiquidityVaultAuthority";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "liquidity_vault_auth";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "bankLiquidityVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "liquidity_vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
        {
          name: "withdrawAll";
          type: {
            option: "bool";
          };
        }
      ];
    },
    {
      name: "lendingAccountBorrow";
      accounts: [
        {
          name: "marginfiGroup";
          isMut: false;
          isSigner: false;
        },
        {
          name: "marginfiAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "signer";
          isMut: false;
          isSigner: true;
        },
        {
          name: "bank";
          isMut: true;
          isSigner: false;
        },
        {
          name: "destinationTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "bankLiquidityVaultAuthority";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "liquidity_vault_auth";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "bankLiquidityVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "liquidity_vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "lendingAccountWithdrawEmissions";
      accounts: [
        {
          name: "marginfiGroup";
          isMut: false;
          isSigner: false;
        },
        {
          name: "marginfiAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "signer";
          isMut: false;
          isSigner: true;
        },
        {
          name: "bank";
          isMut: true;
          isSigner: false;
        },
        {
          name: "emissionsMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "emissionsAuth";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "emissions_auth_seed";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Mint";
                path: "emissions_mint";
              }
            ];
          };
        },
        {
          name: "emissionsVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "emissions_token_account_seed";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              },
              {
                kind: "account";
                type: "publicKey";
                account: "Mint";
                path: "emissions_mint";
              }
            ];
          };
        },
        {
          name: "destinationAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "lendingAccountLiquidate";
      docs: ["Liquidate a lending account balance of an unhealthy marginfi account"];
      accounts: [
        {
          name: "marginfiGroup";
          isMut: false;
          isSigner: false;
        },
        {
          name: "assetBank";
          isMut: true;
          isSigner: false;
        },
        {
          name: "liabBank";
          isMut: true;
          isSigner: false;
        },
        {
          name: "liquidatorMarginfiAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "signer";
          isMut: false;
          isSigner: true;
        },
        {
          name: "liquidateeMarginfiAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "bankLiquidityVaultAuthority";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "liquidity_vault_auth";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "liab_bank";
              }
            ];
          };
        },
        {
          name: "bankLiquidityVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "liquidity_vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "liab_bank";
              }
            ];
          };
        },
        {
          name: "bankInsuranceVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "insurance_vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "liab_bank";
              }
            ];
          };
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "assetAmount";
          type: "u64";
        }
      ];
    },
    {
      name: "lendingPoolAccrueBankInterest";
      accounts: [
        {
          name: "marginfiGroup";
          isMut: false;
          isSigner: false;
        },
        {
          name: "bank";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "lendingPoolCollectBankFees";
      accounts: [
        {
          name: "marginfiGroup";
          isMut: false;
          isSigner: false;
        },
        {
          name: "bank";
          isMut: true;
          isSigner: false;
        },
        {
          name: "liquidityVaultAuthority";
          isMut: false;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "liquidity_vault_auth";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "liquidityVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "liquidity_vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "insuranceVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "insurance_vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "feeVault";
          isMut: true;
          isSigner: false;
          pda: {
            seeds: [
              {
                kind: "const";
                type: "string";
                value: "fee_vault";
              },
              {
                kind: "account";
                type: "publicKey";
                path: "bank";
              }
            ];
          };
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "marginfiAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "group";
            type: "publicKey";
          },
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "lendingAccount";
            type: {
              defined: "LendingAccount";
            };
          },
          {
            name: "padding";
            type: {
              array: ["u64", 64];
            };
          }
        ];
      };
    },
    {
      name: "marginfiGroup";
      type: {
        kind: "struct";
        fields: [
          {
            name: "admin";
            type: "publicKey";
          },
          {
            name: "padding0";
            type: {
              array: ["u128", 32];
            };
          },
          {
            name: "padding1";
            type: {
              array: ["u128", 32];
            };
          }
        ];
      };
    },
    {
      name: "bank";
      type: {
        kind: "struct";
        fields: [
          {
            name: "mint";
            type: "publicKey";
          },
          {
            name: "mintDecimals";
            type: "u8";
          },
          {
            name: "group";
            type: "publicKey";
          },
          {
            name: "ignore1";
            type: {
              array: ["u8", 7];
            };
          },
          {
            name: "assetShareValue";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "liabilityShareValue";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "liquidityVault";
            type: "publicKey";
          },
          {
            name: "liquidityVaultBump";
            type: "u8";
          },
          {
            name: "liquidityVaultAuthorityBump";
            type: "u8";
          },
          {
            name: "insuranceVault";
            type: "publicKey";
          },
          {
            name: "insuranceVaultBump";
            type: "u8";
          },
          {
            name: "insuranceVaultAuthorityBump";
            type: "u8";
          },
          {
            name: "ignore2";
            type: {
              array: ["u8", 4];
            };
          },
          {
            name: "collectedInsuranceFeesOutstanding";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "feeVault";
            type: "publicKey";
          },
          {
            name: "feeVaultBump";
            type: "u8";
          },
          {
            name: "feeVaultAuthorityBump";
            type: "u8";
          },
          {
            name: "ignore3";
            type: {
              array: ["u8", 6];
            };
          },
          {
            name: "collectedGroupFeesOutstanding";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "totalLiabilityShares";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "totalAssetShares";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "lastUpdate";
            type: "i64";
          },
          {
            name: "config";
            type: {
              defined: "BankConfig";
            };
          },
          {
            name: "emissionsFlags";
            docs: [
              "Emissions Config Flags",
              "",
              "- EMISSIONS_FLAG_BORROW_ACTIVE: 1",
              "- EMISSIONS_FLAG_LENDING_ACTIVE: 2",
              ""
            ];
            type: "u64";
          },
          {
            name: "emissionsRate";
            docs: [
              "Emissions APR.",
              "Number of emitted tokens (emissions_mint) per 1M tokens (bank mint) (native amount) per 1 YEAR."
            ];
            type: "u64";
          },
          {
            name: "emissionsRemaining";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "emissionsMint";
            type: "publicKey";
          },
          {
            name: "padding0";
            type: {
              array: ["u128", 28];
            };
          },
          {
            name: "padding1";
            type: {
              array: ["u128", 32];
            };
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "GroupEventHeader";
      type: {
        kind: "struct";
        fields: [
          {
            name: "signer";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "marginfiGroup";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "AccountEventHeader";
      type: {
        kind: "struct";
        fields: [
          {
            name: "signer";
            type: {
              option: "publicKey";
            };
          },
          {
            name: "marginfiAccount";
            type: "publicKey";
          },
          {
            name: "marginfiAccountAuthority";
            type: "publicKey";
          },
          {
            name: "marginfiGroup";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "LiquidationBalances";
      type: {
        kind: "struct";
        fields: [
          {
            name: "liquidateeAssetBalance";
            type: "f64";
          },
          {
            name: "liquidateeLiabilityBalance";
            type: "f64";
          },
          {
            name: "liquidatorAssetBalance";
            type: "f64";
          },
          {
            name: "liquidatorLiabilityBalance";
            type: "f64";
          }
        ];
      };
    },
    {
      name: "LendingAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "balances";
            type: {
              array: [
                {
                  defined: "Balance";
                },
                16
              ];
            };
          },
          {
            name: "padding";
            type: {
              array: ["u64", 8];
            };
          }
        ];
      };
    },
    {
      name: "Balance";
      type: {
        kind: "struct";
        fields: [
          {
            name: "active";
            type: "bool";
          },
          {
            name: "bankPk";
            type: "publicKey";
          },
          {
            name: "ignore";
            type: {
              array: ["u8", 7];
            };
          },
          {
            name: "assetShares";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "liabilityShares";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "emissionsOutstanding";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "lastUpdate";
            type: "u64";
          },
          {
            name: "padding";
            type: {
              array: ["u64", 1];
            };
          }
        ];
      };
    },
    {
      name: "GroupConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "admin";
            type: {
              option: "publicKey";
            };
          }
        ];
      };
    },
    {
      name: "InterestRateConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "optimalUtilizationRate";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "plateauInterestRate";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "maxInterestRate";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "insuranceFeeFixedApr";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "insuranceIrFee";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "protocolFixedFeeApr";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "protocolIrFee";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "padding";
            type: {
              array: ["u128", 8];
            };
          }
        ];
      };
    },
    {
      name: "InterestRateConfigOpt";
      type: {
        kind: "struct";
        fields: [
          {
            name: "optimalUtilizationRate";
            type: {
              option: {
                defined: "WrappedI80F48";
              };
            };
          },
          {
            name: "plateauInterestRate";
            type: {
              option: {
                defined: "WrappedI80F48";
              };
            };
          },
          {
            name: "maxInterestRate";
            type: {
              option: {
                defined: "WrappedI80F48";
              };
            };
          },
          {
            name: "insuranceFeeFixedApr";
            type: {
              option: {
                defined: "WrappedI80F48";
              };
            };
          },
          {
            name: "insuranceIrFee";
            type: {
              option: {
                defined: "WrappedI80F48";
              };
            };
          },
          {
            name: "protocolFixedFeeApr";
            type: {
              option: {
                defined: "WrappedI80F48";
              };
            };
          },
          {
            name: "protocolIrFee";
            type: {
              option: {
                defined: "WrappedI80F48";
              };
            };
          }
        ];
      };
    },
    {
      name: "BankConfig";
      docs: ["TODO: Convert weights to (u64, u64) to avoid precision loss (maybe?)"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "assetWeightInit";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "assetWeightMaint";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "liabilityWeightInit";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "liabilityWeightMaint";
            type: {
              defined: "WrappedI80F48";
            };
          },
          {
            name: "depositLimit";
            type: "u64";
          },
          {
            name: "interestRateConfig";
            type: {
              defined: "InterestRateConfig";
            };
          },
          {
            name: "operationalState";
            type: {
              defined: "BankOperationalState";
            };
          },
          {
            name: "oracleSetup";
            type: "u8";
          },
          {
            name: "oracleKeys";
            type: {
              array: ["publicKey", 5];
            };
          },
          {
            name: "ignore1";
            type: {
              array: ["u8", 6];
            };
          },
          {
            name: "borrowLimit";
            type: "u64";
          },
          {
            name: "riskTier";
            type: {
              defined: "RiskTier";
            };
          },
          {
            name: "ignore2";
            type: {
              array: ["u8", 7];
            };
          },
          {
            name: "totalAssetValueInitLimit";
            type: "u64";
          },
          {
            name: "padding";
            type: {
              array: ["u8", 40];
            };
          }
        ];
      };
    },
    {
      name: "WrappedI80F48";
      type: {
        kind: "struct";
        fields: [
          {
            name: "value";
            type: "i128";
          }
        ];
      };
    },
    {
      name: "BankConfigOpt";
      type: {
        kind: "struct";
        fields: [
          {
            name: "assetWeightInit";
            type: {
              option: {
                defined: "WrappedI80F48";
              };
            };
          },
          {
            name: "assetWeightMaint";
            type: {
              option: {
                defined: "WrappedI80F48";
              };
            };
          },
          {
            name: "liabilityWeightInit";
            type: {
              option: {
                defined: "WrappedI80F48";
              };
            };
          },
          {
            name: "liabilityWeightMaint";
            type: {
              option: {
                defined: "WrappedI80F48";
              };
            };
          },
          {
            name: "depositLimit";
            type: {
              option: "u64";
            };
          },
          {
            name: "borrowLimit";
            type: {
              option: "u64";
            };
          },
          {
            name: "operationalState";
            type: {
              option: {
                defined: "BankOperationalState";
              };
            };
          },
          {
            name: "oracle";
            type: {
              option: {
                defined: "OracleConfig";
              };
            };
          },
          {
            name: "interestRateConfig";
            type: {
              option: {
                defined: "InterestRateConfigOpt";
              };
            };
          },
          {
            name: "riskTier";
            type: {
              option: {
                defined: "RiskTier";
              };
            };
          }
        ];
      };
    },
    {
      name: "OracleConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "setup";
            type: {
              defined: "OracleSetup";
            };
          },
          {
            name: "keys";
            type: {
              array: ["publicKey", 5];
            };
          }
        ];
      };
    },
    {
      name: "BalanceIncreaseType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Any";
          },
          {
            name: "RepayOnly";
          },
          {
            name: "DepositOnly";
          }
        ];
      };
    },
    {
      name: "BalanceDecreaseType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Any";
          },
          {
            name: "WithdrawOnly";
          },
          {
            name: "BorrowOnly";
          },
          {
            name: "BypassBorrowLimit";
          }
        ];
      };
    },
    {
      name: "WeightType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Initial";
          },
          {
            name: "Maintenance";
          }
        ];
      };
    },
    {
      name: "BalanceSide";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Assets";
          },
          {
            name: "Liabilities";
          }
        ];
      };
    },
    {
      name: "RiskRequirementType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Initial";
          },
          {
            name: "Maintenance";
          },
          {
            name: "Equity";
          }
        ];
      };
    },
    {
      name: "BankOperationalState";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Paused";
          },
          {
            name: "Operational";
          },
          {
            name: "ReduceOnly";
          }
        ];
      };
    },
    {
      name: "RiskTier";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Collateral";
          },
          {
            name: "Isolated";
          }
        ];
      };
    },
    {
      name: "BankVaultType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Liquidity";
          },
          {
            name: "Insurance";
          },
          {
            name: "Fee";
          }
        ];
      };
    },
    {
      name: "OracleSetup";
      type: {
        kind: "enum";
        variants: [
          {
            name: "None";
          },
          {
            name: "PythEma";
          },
          {
            name: "SwitchboardV2";
          }
        ];
      };
    }
  ];
  events: [
    {
      name: "MarginfiGroupCreateEvent";
      fields: [
        {
          name: "header";
          type: {
            defined: "GroupEventHeader";
          };
          index: false;
        }
      ];
    },
    {
      name: "MarginfiGroupConfigureEvent";
      fields: [
        {
          name: "header";
          type: {
            defined: "GroupEventHeader";
          };
          index: false;
        },
        {
          name: "config";
          type: {
            defined: "GroupConfig";
          };
          index: false;
        }
      ];
    },
    {
      name: "LendingPoolBankCreateEvent";
      fields: [
        {
          name: "header";
          type: {
            defined: "GroupEventHeader";
          };
          index: false;
        },
        {
          name: "bank";
          type: "publicKey";
          index: false;
        },
        {
          name: "mint";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "LendingPoolBankConfigureEvent";
      fields: [
        {
          name: "header";
          type: {
            defined: "GroupEventHeader";
          };
          index: false;
        },
        {
          name: "bank";
          type: "publicKey";
          index: false;
        },
        {
          name: "mint";
          type: "publicKey";
          index: false;
        },
        {
          name: "config";
          type: {
            defined: "BankConfigOpt";
          };
          index: false;
        }
      ];
    },
    {
      name: "LendingPoolBankAccrueInterestEvent";
      fields: [
        {
          name: "header";
          type: {
            defined: "GroupEventHeader";
          };
          index: false;
        },
        {
          name: "bank";
          type: "publicKey";
          index: false;
        },
        {
          name: "mint";
          type: "publicKey";
          index: false;
        },
        {
          name: "delta";
          type: "u64";
          index: false;
        },
        {
          name: "feesCollected";
          type: "f64";
          index: false;
        },
        {
          name: "insuranceCollected";
          type: "f64";
          index: false;
        }
      ];
    },
    {
      name: "LendingPoolBankCollectFeesEvent";
      fields: [
        {
          name: "header";
          type: {
            defined: "GroupEventHeader";
          };
          index: false;
        },
        {
          name: "bank";
          type: "publicKey";
          index: false;
        },
        {
          name: "mint";
          type: "publicKey";
          index: false;
        },
        {
          name: "groupFeesCollected";
          type: "f64";
          index: false;
        },
        {
          name: "groupFeesOutstanding";
          type: "f64";
          index: false;
        },
        {
          name: "insuranceFeesCollected";
          type: "f64";
          index: false;
        },
        {
          name: "insuranceFeesOutstanding";
          type: "f64";
          index: false;
        }
      ];
    },
    {
      name: "LendingPoolBankHandleBankruptcyEvent";
      fields: [
        {
          name: "header";
          type: {
            defined: "AccountEventHeader";
          };
          index: false;
        },
        {
          name: "bank";
          type: "publicKey";
          index: false;
        },
        {
          name: "mint";
          type: "publicKey";
          index: false;
        },
        {
          name: "badDebt";
          type: "f64";
          index: false;
        },
        {
          name: "coveredAmount";
          type: "f64";
          index: false;
        },
        {
          name: "socializedAmount";
          type: "f64";
          index: false;
        }
      ];
    },
    {
      name: "MarginfiAccountCreateEvent";
      fields: [
        {
          name: "header";
          type: {
            defined: "AccountEventHeader";
          };
          index: false;
        }
      ];
    },
    {
      name: "LendingAccountDepositEvent";
      fields: [
        {
          name: "header";
          type: {
            defined: "AccountEventHeader";
          };
          index: false;
        },
        {
          name: "bank";
          type: "publicKey";
          index: false;
        },
        {
          name: "mint";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "LendingAccountRepayEvent";
      fields: [
        {
          name: "header";
          type: {
            defined: "AccountEventHeader";
          };
          index: false;
        },
        {
          name: "bank";
          type: "publicKey";
          index: false;
        },
        {
          name: "mint";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        },
        {
          name: "closeBalance";
          type: "bool";
          index: false;
        }
      ];
    },
    {
      name: "LendingAccountBorrowEvent";
      fields: [
        {
          name: "header";
          type: {
            defined: "AccountEventHeader";
          };
          index: false;
        },
        {
          name: "bank";
          type: "publicKey";
          index: false;
        },
        {
          name: "mint";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "LendingAccountWithdrawEvent";
      fields: [
        {
          name: "header";
          type: {
            defined: "AccountEventHeader";
          };
          index: false;
        },
        {
          name: "bank";
          type: "publicKey";
          index: false;
        },
        {
          name: "mint";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        },
        {
          name: "closeBalance";
          type: "bool";
          index: false;
        }
      ];
    },
    {
      name: "LendingAccountLiquidateEvent";
      fields: [
        {
          name: "header";
          type: {
            defined: "AccountEventHeader";
          };
          index: false;
        },
        {
          name: "liquidateeMarginfiAccount";
          type: "publicKey";
          index: false;
        },
        {
          name: "liquidateeMarginfiAccountAuthority";
          type: "publicKey";
          index: false;
        },
        {
          name: "assetBank";
          type: "publicKey";
          index: false;
        },
        {
          name: "assetMint";
          type: "publicKey";
          index: false;
        },
        {
          name: "liabilityBank";
          type: "publicKey";
          index: false;
        },
        {
          name: "liabilityMint";
          type: "publicKey";
          index: false;
        },
        {
          name: "liquidateePreHealth";
          type: "f64";
          index: false;
        },
        {
          name: "liquidateePostHealth";
          type: "f64";
          index: false;
        },
        {
          name: "preBalances";
          type: {
            defined: "LiquidationBalances";
          };
          index: false;
        },
        {
          name: "postBalances";
          type: {
            defined: "LiquidationBalances";
          };
          index: false;
        }
      ];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "MathError";
      msg: "Math error";
    },
    {
      code: 6001;
      name: "BankNotFound";
      msg: "Invalid bank index";
    },
    {
      code: 6002;
      name: "LendingAccountBalanceNotFound";
      msg: "Lending account balance not found";
    },
    {
      code: 6003;
      name: "BankAssetCapacityExceeded";
      msg: "Bank deposit capacity exceeded";
    },
    {
      code: 6004;
      name: "InvalidTransfer";
      msg: "Invalid transfer";
    },
    {
      code: 6005;
      name: "MissingPythOrBankAccount";
      msg: "Missing Pyth or Bank account";
    },
    {
      code: 6006;
      name: "MissingPythAccount";
      msg: "Missing Pyth account";
    },
    {
      code: 6007;
      name: "InvalidOracleAccount";
      msg: "Invalid Pyth account";
    },
    {
      code: 6008;
      name: "MissingBankAccount";
      msg: "Missing Bank account";
    },
    {
      code: 6009;
      name: "InvalidBankAccount";
      msg: "Invalid Bank account";
    },
    {
      code: 6010;
      name: "BadAccountHealth";
      msg: "Bad account health";
    },
    {
      code: 6011;
      name: "LendingAccountBalanceSlotsFull";
      msg: "Lending account balance slots are full";
    },
    {
      code: 6012;
      name: "BankAlreadyExists";
      msg: "Bank already exists";
    },
    {
      code: 6013;
      name: "IllegalLiquidation";
      msg: "Illegal liquidation";
    },
    {
      code: 6014;
      name: "AccountNotBankrupt";
      msg: "Account is not bankrupt";
    },
    {
      code: 6015;
      name: "BalanceNotBadDebt";
      msg: "Account balance is not bad debt";
    },
    {
      code: 6016;
      name: "InvalidConfig";
      msg: "Invalid group config";
    },
    {
      code: 6017;
      name: "StaleOracle";
      msg: "Stale oracle data";
    },
    {
      code: 6018;
      name: "BankPaused";
      msg: "Bank paused";
    },
    {
      code: 6019;
      name: "BankReduceOnly";
      msg: "Bank is ReduceOnly mode";
    },
    {
      code: 6020;
      name: "BankAccoutNotFound";
      msg: "Bank is missing";
    },
    {
      code: 6021;
      name: "OperationDepositOnly";
      msg: "Operation is deposit-only";
    },
    {
      code: 6022;
      name: "OperationWithdrawOnly";
      msg: "Operation is withdraw-only";
    },
    {
      code: 6023;
      name: "OperationBorrowOnly";
      msg: "Operation is borrow-only";
    },
    {
      code: 6024;
      name: "OperationRepayOnly";
      msg: "Operation is repay-only";
    },
    {
      code: 6025;
      name: "NoAssetFound";
      msg: "No asset found";
    },
    {
      code: 6026;
      name: "NoLiabilityFound";
      msg: "No liability found";
    },
    {
      code: 6027;
      name: "InvalidOracleSetup";
      msg: "Invalid oracle setup";
    },
    {
      code: 6028;
      name: "IllegalUtilizationRatio";
      msg: "Invalid bank utilization ratio";
    },
    {
      code: 6029;
      name: "BankLiabilityCapacityExceeded";
      msg: "Bank borrow cap exceeded";
    },
    {
      code: 6030;
      name: "InvalidPrice";
      msg: "Invalid Price";
    },
    {
      code: 6031;
      name: "IsolatedAccountIllegalState";
      msg: "Account can have only one liablity when account is under isolated risk";
    },
    {
      code: 6032;
      name: "EmissionsAlreadySetup";
      msg: "Emissions already setup";
    },
    {
      code: 6033;
      name: "OracleNotSetup";
      msg: "Oracle is not set";
    },
    {
      code: 6034;
      name: "InvalidSwitchboardDecimalConversion";
      msg: "Invalid swithcboard decimal conversion";
    },
    {
      code: 6035;
      name: "CannotCloseOutstandingEmissions";
      msg: "Cannot close balance because of outstanding emissions";
    },
    {
      code: 6036;
      name: "EmissionsUpdateError";
      msg: "Update emissions error";
    },
    {
      code: 6037;
      name: "AccountDisabled";
      msg: "Account disabled";
    },
    {
      code: 6038;
      name: "AccountTempActiveBalanceLimitExceeded";
      msg: "Account can't temporarily open new balances, please close a balance first";
    },
    {
      code: 6039;
      name: "IllegalBalanceState";
      msg: "Illegal balance state";
    }
  ];
};

export const IDL: Marginfi = {
  version: "0.1.0",
  name: "marginfi",
  instructions: [
    {
      name: "marginfiGroupInitialize",
      accounts: [
        {
          name: "marginfiGroup",
          isMut: true,
          isSigner: true,
        },
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "marginfiGroupConfigure",
      accounts: [
        {
          name: "marginfiGroup",
          isMut: true,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "config",
          type: {
            defined: "GroupConfig",
          },
        },
      ],
    },
    {
      name: "lendingPoolAddBank",
      accounts: [
        {
          name: "marginfiGroup",
          isMut: false,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "bankMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "bank",
          isMut: true,
          isSigner: true,
        },
        {
          name: "liquidityVaultAuthority",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "liquidity_vault_auth",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "liquidityVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "liquidity_vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "insuranceVaultAuthority",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "insurance_vault_auth",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "insuranceVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "insurance_vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "feeVaultAuthority",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "fee_vault_auth",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "feeVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "fee_vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bankConfig",
          type: {
            defined: "BankConfig",
          },
        },
      ],
    },
    {
      name: "lendingPoolConfigureBank",
      accounts: [
        {
          name: "marginfiGroup",
          isMut: false,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: false,
          isSigner: true,
        },
        {
          name: "bank",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "bankConfigOpt",
          type: {
            defined: "BankConfigOpt",
          },
        },
      ],
    },
    {
      name: "lendingPoolSetupEmissions",
      accounts: [
        {
          name: "marginfiGroup",
          isMut: false,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "bank",
          isMut: true,
          isSigner: false,
        },
        {
          name: "emissionsMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "emissionsAuth",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "emissions_auth_seed",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Mint",
                path: "emissions_mint",
              },
            ],
          },
        },
        {
          name: "emissionsTokenAccount",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "emissions_token_account_seed",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Mint",
                path: "emissions_mint",
              },
            ],
          },
        },
        {
          name: "emissionsFundingAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "flags",
          type: "u64",
        },
        {
          name: "rate",
          type: "u64",
        },
        {
          name: "totalEmissions",
          type: "u64",
        },
      ],
    },
    {
      name: "lendingPoolHandleBankruptcy",
      docs: ["Handle bad debt of a bankrupt marginfi account for a given bank."],
      accounts: [
        {
          name: "marginfiGroup",
          isMut: false,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: false,
          isSigner: true,
        },
        {
          name: "bank",
          isMut: true,
          isSigner: false,
        },
        {
          name: "marginfiAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "liquidityVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "liquidity_vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "insuranceVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "insurance_vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "insuranceVaultAuthority",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "insurance_vault_auth",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "marginfiAccountInitialize",
      docs: ["Initialize a marginfi account for a given group"],
      accounts: [
        {
          name: "marginfiGroup",
          isMut: false,
          isSigner: false,
        },
        {
          name: "marginfiAccount",
          isMut: true,
          isSigner: true,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "feePayer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "lendingAccountDeposit",
      accounts: [
        {
          name: "marginfiGroup",
          isMut: false,
          isSigner: false,
        },
        {
          name: "marginfiAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "signer",
          isMut: false,
          isSigner: true,
        },
        {
          name: "bank",
          isMut: true,
          isSigner: false,
        },
        {
          name: "signerTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "bankLiquidityVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "liquidity_vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "lendingAccountRepay",
      accounts: [
        {
          name: "marginfiGroup",
          isMut: false,
          isSigner: false,
        },
        {
          name: "marginfiAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "signer",
          isMut: false,
          isSigner: true,
        },
        {
          name: "bank",
          isMut: true,
          isSigner: false,
        },
        {
          name: "signerTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "bankLiquidityVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "liquidity_vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
        {
          name: "repayAll",
          type: {
            option: "bool",
          },
        },
      ],
    },
    {
      name: "lendingAccountWithdraw",
      accounts: [
        {
          name: "marginfiGroup",
          isMut: false,
          isSigner: false,
        },
        {
          name: "marginfiAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "signer",
          isMut: false,
          isSigner: true,
        },
        {
          name: "bank",
          isMut: true,
          isSigner: false,
        },
        {
          name: "destinationTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "bankLiquidityVaultAuthority",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "liquidity_vault_auth",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "bankLiquidityVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "liquidity_vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
        {
          name: "withdrawAll",
          type: {
            option: "bool",
          },
        },
      ],
    },
    {
      name: "lendingAccountBorrow",
      accounts: [
        {
          name: "marginfiGroup",
          isMut: false,
          isSigner: false,
        },
        {
          name: "marginfiAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "signer",
          isMut: false,
          isSigner: true,
        },
        {
          name: "bank",
          isMut: true,
          isSigner: false,
        },
        {
          name: "destinationTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "bankLiquidityVaultAuthority",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "liquidity_vault_auth",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "bankLiquidityVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "liquidity_vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "lendingAccountWithdrawEmissions",
      accounts: [
        {
          name: "marginfiGroup",
          isMut: false,
          isSigner: false,
        },
        {
          name: "marginfiAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "signer",
          isMut: false,
          isSigner: true,
        },
        {
          name: "bank",
          isMut: true,
          isSigner: false,
        },
        {
          name: "emissionsMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "emissionsAuth",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "emissions_auth_seed",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Mint",
                path: "emissions_mint",
              },
            ],
          },
        },
        {
          name: "emissionsVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "emissions_token_account_seed",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
              {
                kind: "account",
                type: "publicKey",
                account: "Mint",
                path: "emissions_mint",
              },
            ],
          },
        },
        {
          name: "destinationAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "lendingAccountLiquidate",
      docs: ["Liquidate a lending account balance of an unhealthy marginfi account"],
      accounts: [
        {
          name: "marginfiGroup",
          isMut: false,
          isSigner: false,
        },
        {
          name: "assetBank",
          isMut: true,
          isSigner: false,
        },
        {
          name: "liabBank",
          isMut: true,
          isSigner: false,
        },
        {
          name: "liquidatorMarginfiAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "signer",
          isMut: false,
          isSigner: true,
        },
        {
          name: "liquidateeMarginfiAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "bankLiquidityVaultAuthority",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "liquidity_vault_auth",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "liab_bank",
              },
            ],
          },
        },
        {
          name: "bankLiquidityVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "liquidity_vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "liab_bank",
              },
            ],
          },
        },
        {
          name: "bankInsuranceVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "insurance_vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "liab_bank",
              },
            ],
          },
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "assetAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "lendingPoolAccrueBankInterest",
      accounts: [
        {
          name: "marginfiGroup",
          isMut: false,
          isSigner: false,
        },
        {
          name: "bank",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "lendingPoolCollectBankFees",
      accounts: [
        {
          name: "marginfiGroup",
          isMut: false,
          isSigner: false,
        },
        {
          name: "bank",
          isMut: true,
          isSigner: false,
        },
        {
          name: "liquidityVaultAuthority",
          isMut: false,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "liquidity_vault_auth",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "liquidityVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "liquidity_vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "insuranceVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "insurance_vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "feeVault",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                type: "string",
                value: "fee_vault",
              },
              {
                kind: "account",
                type: "publicKey",
                path: "bank",
              },
            ],
          },
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "marginfiAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "group",
            type: "publicKey",
          },
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "lendingAccount",
            type: {
              defined: "LendingAccount",
            },
          },
          {
            name: "padding",
            type: {
              array: ["u64", 64],
            },
          },
        ],
      },
    },
    {
      name: "marginfiGroup",
      type: {
        kind: "struct",
        fields: [
          {
            name: "admin",
            type: "publicKey",
          },
          {
            name: "padding0",
            type: {
              array: ["u128", 32],
            },
          },
          {
            name: "padding1",
            type: {
              array: ["u128", 32],
            },
          },
        ],
      },
    },
    {
      name: "bank",
      type: {
        kind: "struct",
        fields: [
          {
            name: "mint",
            type: "publicKey",
          },
          {
            name: "mintDecimals",
            type: "u8",
          },
          {
            name: "group",
            type: "publicKey",
          },
          {
            name: "ignore1",
            type: {
              array: ["u8", 7],
            },
          },
          {
            name: "assetShareValue",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "liabilityShareValue",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "liquidityVault",
            type: "publicKey",
          },
          {
            name: "liquidityVaultBump",
            type: "u8",
          },
          {
            name: "liquidityVaultAuthorityBump",
            type: "u8",
          },
          {
            name: "insuranceVault",
            type: "publicKey",
          },
          {
            name: "insuranceVaultBump",
            type: "u8",
          },
          {
            name: "insuranceVaultAuthorityBump",
            type: "u8",
          },
          {
            name: "ignore2",
            type: {
              array: ["u8", 4],
            },
          },
          {
            name: "collectedInsuranceFeesOutstanding",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "feeVault",
            type: "publicKey",
          },
          {
            name: "feeVaultBump",
            type: "u8",
          },
          {
            name: "feeVaultAuthorityBump",
            type: "u8",
          },
          {
            name: "ignore3",
            type: {
              array: ["u8", 6],
            },
          },
          {
            name: "collectedGroupFeesOutstanding",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "totalLiabilityShares",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "totalAssetShares",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "lastUpdate",
            type: "i64",
          },
          {
            name: "config",
            type: {
              defined: "BankConfig",
            },
          },
          {
            name: "emissionsFlags",
            docs: [
              "Emissions Config Flags",
              "",
              "- EMISSIONS_FLAG_BORROW_ACTIVE: 1",
              "- EMISSIONS_FLAG_LENDING_ACTIVE: 2",
              "",
            ],
            type: "u64",
          },
          {
            name: "emissionsRate",
            docs: [
              "Emissions APR.",
              "Number of emitted tokens (emissions_mint) per 1M tokens (bank mint) (native amount) per 1 YEAR.",
            ],
            type: "u64",
          },
          {
            name: "emissionsRemaining",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "emissionsMint",
            type: "publicKey",
          },
          {
            name: "padding0",
            type: {
              array: ["u128", 28],
            },
          },
          {
            name: "padding1",
            type: {
              array: ["u128", 32],
            },
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "GroupEventHeader",
      type: {
        kind: "struct",
        fields: [
          {
            name: "signer",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "marginfiGroup",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "AccountEventHeader",
      type: {
        kind: "struct",
        fields: [
          {
            name: "signer",
            type: {
              option: "publicKey",
            },
          },
          {
            name: "marginfiAccount",
            type: "publicKey",
          },
          {
            name: "marginfiAccountAuthority",
            type: "publicKey",
          },
          {
            name: "marginfiGroup",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "LiquidationBalances",
      type: {
        kind: "struct",
        fields: [
          {
            name: "liquidateeAssetBalance",
            type: "f64",
          },
          {
            name: "liquidateeLiabilityBalance",
            type: "f64",
          },
          {
            name: "liquidatorAssetBalance",
            type: "f64",
          },
          {
            name: "liquidatorLiabilityBalance",
            type: "f64",
          },
        ],
      },
    },
    {
      name: "LendingAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "balances",
            type: {
              array: [
                {
                  defined: "Balance",
                },
                16,
              ],
            },
          },
          {
            name: "padding",
            type: {
              array: ["u64", 8],
            },
          },
        ],
      },
    },
    {
      name: "Balance",
      type: {
        kind: "struct",
        fields: [
          {
            name: "active",
            type: "bool",
          },
          {
            name: "bankPk",
            type: "publicKey",
          },
          {
            name: "ignore",
            type: {
              array: ["u8", 7],
            },
          },
          {
            name: "assetShares",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "liabilityShares",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "emissionsOutstanding",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "lastUpdate",
            type: "u64",
          },
          {
            name: "padding",
            type: {
              array: ["u64", 1],
            },
          },
        ],
      },
    },
    {
      name: "GroupConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "admin",
            type: {
              option: "publicKey",
            },
          },
        ],
      },
    },
    {
      name: "InterestRateConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "optimalUtilizationRate",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "plateauInterestRate",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "maxInterestRate",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "insuranceFeeFixedApr",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "insuranceIrFee",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "protocolFixedFeeApr",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "protocolIrFee",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "padding",
            type: {
              array: ["u128", 8],
            },
          },
        ],
      },
    },
    {
      name: "InterestRateConfigOpt",
      type: {
        kind: "struct",
        fields: [
          {
            name: "optimalUtilizationRate",
            type: {
              option: {
                defined: "WrappedI80F48",
              },
            },
          },
          {
            name: "plateauInterestRate",
            type: {
              option: {
                defined: "WrappedI80F48",
              },
            },
          },
          {
            name: "maxInterestRate",
            type: {
              option: {
                defined: "WrappedI80F48",
              },
            },
          },
          {
            name: "insuranceFeeFixedApr",
            type: {
              option: {
                defined: "WrappedI80F48",
              },
            },
          },
          {
            name: "insuranceIrFee",
            type: {
              option: {
                defined: "WrappedI80F48",
              },
            },
          },
          {
            name: "protocolFixedFeeApr",
            type: {
              option: {
                defined: "WrappedI80F48",
              },
            },
          },
          {
            name: "protocolIrFee",
            type: {
              option: {
                defined: "WrappedI80F48",
              },
            },
          },
        ],
      },
    },
    {
      name: "BankConfig",
      docs: ["TODO: Convert weights to (u64, u64) to avoid precision loss (maybe?)"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "assetWeightInit",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "assetWeightMaint",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "liabilityWeightInit",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "liabilityWeightMaint",
            type: {
              defined: "WrappedI80F48",
            },
          },
          {
            name: "depositLimit",
            type: "u64",
          },
          {
            name: "interestRateConfig",
            type: {
              defined: "InterestRateConfig",
            },
          },
          {
            name: "operationalState",
            type: {
              defined: "BankOperationalState",
            },
          },
          {
            name: "oracleSetup",
            type: "u8",
          },
          {
            name: "oracleKeys",
            type: {
              array: ["publicKey", 5],
            },
          },
          {
            name: "ignore1",
            type: {
              array: ["u8", 6],
            },
          },
          {
            name: "borrowLimit",
            type: "u64",
          },
          {
            name: "riskTier",
            type: {
              defined: "RiskTier",
            },
          },
          {
            name: "ignore2",
            type: {
              array: ["u8", 7],
            },
          },
          {
            name: "totalAssetValueInitLimit",
            type: "u64",
          },
          {
            name: "padding",
            type: {
              array: ["u8", 40],
            },
          },
        ],
      },
    },
    {
      name: "WrappedI80F48",
      type: {
        kind: "struct",
        fields: [
          {
            name: "value",
            type: "i128",
          },
        ],
      },
    },
    {
      name: "BankConfigOpt",
      type: {
        kind: "struct",
        fields: [
          {
            name: "assetWeightInit",
            type: {
              option: {
                defined: "WrappedI80F48",
              },
            },
          },
          {
            name: "assetWeightMaint",
            type: {
              option: {
                defined: "WrappedI80F48",
              },
            },
          },
          {
            name: "liabilityWeightInit",
            type: {
              option: {
                defined: "WrappedI80F48",
              },
            },
          },
          {
            name: "liabilityWeightMaint",
            type: {
              option: {
                defined: "WrappedI80F48",
              },
            },
          },
          {
            name: "depositLimit",
            type: {
              option: "u64",
            },
          },
          {
            name: "borrowLimit",
            type: {
              option: "u64",
            },
          },
          {
            name: "operationalState",
            type: {
              option: {
                defined: "BankOperationalState",
              },
            },
          },
          {
            name: "oracle",
            type: {
              option: {
                defined: "OracleConfig",
              },
            },
          },
          {
            name: "interestRateConfig",
            type: {
              option: {
                defined: "InterestRateConfigOpt",
              },
            },
          },
          {
            name: "riskTier",
            type: {
              option: {
                defined: "RiskTier",
              },
            },
          },
        ],
      },
    },
    {
      name: "OracleConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "setup",
            type: {
              defined: "OracleSetup",
            },
          },
          {
            name: "keys",
            type: {
              array: ["publicKey", 5],
            },
          },
        ],
      },
    },
    {
      name: "BalanceIncreaseType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Any",
          },
          {
            name: "RepayOnly",
          },
          {
            name: "DepositOnly",
          },
        ],
      },
    },
    {
      name: "BalanceDecreaseType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Any",
          },
          {
            name: "WithdrawOnly",
          },
          {
            name: "BorrowOnly",
          },
          {
            name: "BypassBorrowLimit",
          },
        ],
      },
    },
    {
      name: "WeightType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Initial",
          },
          {
            name: "Maintenance",
          },
        ],
      },
    },
    {
      name: "BalanceSide",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Assets",
          },
          {
            name: "Liabilities",
          },
        ],
      },
    },
    {
      name: "RiskRequirementType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Initial",
          },
          {
            name: "Maintenance",
          },
          {
            name: "Equity",
          },
        ],
      },
    },
    {
      name: "BankOperationalState",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Paused",
          },
          {
            name: "Operational",
          },
          {
            name: "ReduceOnly",
          },
        ],
      },
    },
    {
      name: "RiskTier",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Collateral",
          },
          {
            name: "Isolated",
          },
        ],
      },
    },
    {
      name: "BankVaultType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Liquidity",
          },
          {
            name: "Insurance",
          },
          {
            name: "Fee",
          },
        ],
      },
    },
    {
      name: "OracleSetup",
      type: {
        kind: "enum",
        variants: [
          {
            name: "None",
          },
          {
            name: "PythEma",
          },
          {
            name: "SwitchboardV2",
          },
        ],
      },
    },
  ],
  events: [
    {
      name: "MarginfiGroupCreateEvent",
      fields: [
        {
          name: "header",
          type: {
            defined: "GroupEventHeader",
          },
          index: false,
        },
      ],
    },
    {
      name: "MarginfiGroupConfigureEvent",
      fields: [
        {
          name: "header",
          type: {
            defined: "GroupEventHeader",
          },
          index: false,
        },
        {
          name: "config",
          type: {
            defined: "GroupConfig",
          },
          index: false,
        },
      ],
    },
    {
      name: "LendingPoolBankCreateEvent",
      fields: [
        {
          name: "header",
          type: {
            defined: "GroupEventHeader",
          },
          index: false,
        },
        {
          name: "bank",
          type: "publicKey",
          index: false,
        },
        {
          name: "mint",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "LendingPoolBankConfigureEvent",
      fields: [
        {
          name: "header",
          type: {
            defined: "GroupEventHeader",
          },
          index: false,
        },
        {
          name: "bank",
          type: "publicKey",
          index: false,
        },
        {
          name: "mint",
          type: "publicKey",
          index: false,
        },
        {
          name: "config",
          type: {
            defined: "BankConfigOpt",
          },
          index: false,
        },
      ],
    },
    {
      name: "LendingPoolBankAccrueInterestEvent",
      fields: [
        {
          name: "header",
          type: {
            defined: "GroupEventHeader",
          },
          index: false,
        },
        {
          name: "bank",
          type: "publicKey",
          index: false,
        },
        {
          name: "mint",
          type: "publicKey",
          index: false,
        },
        {
          name: "delta",
          type: "u64",
          index: false,
        },
        {
          name: "feesCollected",
          type: "f64",
          index: false,
        },
        {
          name: "insuranceCollected",
          type: "f64",
          index: false,
        },
      ],
    },
    {
      name: "LendingPoolBankCollectFeesEvent",
      fields: [
        {
          name: "header",
          type: {
            defined: "GroupEventHeader",
          },
          index: false,
        },
        {
          name: "bank",
          type: "publicKey",
          index: false,
        },
        {
          name: "mint",
          type: "publicKey",
          index: false,
        },
        {
          name: "groupFeesCollected",
          type: "f64",
          index: false,
        },
        {
          name: "groupFeesOutstanding",
          type: "f64",
          index: false,
        },
        {
          name: "insuranceFeesCollected",
          type: "f64",
          index: false,
        },
        {
          name: "insuranceFeesOutstanding",
          type: "f64",
          index: false,
        },
      ],
    },
    {
      name: "LendingPoolBankHandleBankruptcyEvent",
      fields: [
        {
          name: "header",
          type: {
            defined: "AccountEventHeader",
          },
          index: false,
        },
        {
          name: "bank",
          type: "publicKey",
          index: false,
        },
        {
          name: "mint",
          type: "publicKey",
          index: false,
        },
        {
          name: "badDebt",
          type: "f64",
          index: false,
        },
        {
          name: "coveredAmount",
          type: "f64",
          index: false,
        },
        {
          name: "socializedAmount",
          type: "f64",
          index: false,
        },
      ],
    },
    {
      name: "MarginfiAccountCreateEvent",
      fields: [
        {
          name: "header",
          type: {
            defined: "AccountEventHeader",
          },
          index: false,
        },
      ],
    },
    {
      name: "LendingAccountDepositEvent",
      fields: [
        {
          name: "header",
          type: {
            defined: "AccountEventHeader",
          },
          index: false,
        },
        {
          name: "bank",
          type: "publicKey",
          index: false,
        },
        {
          name: "mint",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "LendingAccountRepayEvent",
      fields: [
        {
          name: "header",
          type: {
            defined: "AccountEventHeader",
          },
          index: false,
        },
        {
          name: "bank",
          type: "publicKey",
          index: false,
        },
        {
          name: "mint",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "closeBalance",
          type: "bool",
          index: false,
        },
      ],
    },
    {
      name: "LendingAccountBorrowEvent",
      fields: [
        {
          name: "header",
          type: {
            defined: "AccountEventHeader",
          },
          index: false,
        },
        {
          name: "bank",
          type: "publicKey",
          index: false,
        },
        {
          name: "mint",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "LendingAccountWithdrawEvent",
      fields: [
        {
          name: "header",
          type: {
            defined: "AccountEventHeader",
          },
          index: false,
        },
        {
          name: "bank",
          type: "publicKey",
          index: false,
        },
        {
          name: "mint",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "closeBalance",
          type: "bool",
          index: false,
        },
      ],
    },
    {
      name: "LendingAccountLiquidateEvent",
      fields: [
        {
          name: "header",
          type: {
            defined: "AccountEventHeader",
          },
          index: false,
        },
        {
          name: "liquidateeMarginfiAccount",
          type: "publicKey",
          index: false,
        },
        {
          name: "liquidateeMarginfiAccountAuthority",
          type: "publicKey",
          index: false,
        },
        {
          name: "assetBank",
          type: "publicKey",
          index: false,
        },
        {
          name: "assetMint",
          type: "publicKey",
          index: false,
        },
        {
          name: "liabilityBank",
          type: "publicKey",
          index: false,
        },
        {
          name: "liabilityMint",
          type: "publicKey",
          index: false,
        },
        {
          name: "liquidateePreHealth",
          type: "f64",
          index: false,
        },
        {
          name: "liquidateePostHealth",
          type: "f64",
          index: false,
        },
        {
          name: "preBalances",
          type: {
            defined: "LiquidationBalances",
          },
          index: false,
        },
        {
          name: "postBalances",
          type: {
            defined: "LiquidationBalances",
          },
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "MathError",
      msg: "Math error",
    },
    {
      code: 6001,
      name: "BankNotFound",
      msg: "Invalid bank index",
    },
    {
      code: 6002,
      name: "LendingAccountBalanceNotFound",
      msg: "Lending account balance not found",
    },
    {
      code: 6003,
      name: "BankAssetCapacityExceeded",
      msg: "Bank deposit capacity exceeded",
    },
    {
      code: 6004,
      name: "InvalidTransfer",
      msg: "Invalid transfer",
    },
    {
      code: 6005,
      name: "MissingPythOrBankAccount",
      msg: "Missing Pyth or Bank account",
    },
    {
      code: 6006,
      name: "MissingPythAccount",
      msg: "Missing Pyth account",
    },
    {
      code: 6007,
      name: "InvalidOracleAccount",
      msg: "Invalid Pyth account",
    },
    {
      code: 6008,
      name: "MissingBankAccount",
      msg: "Missing Bank account",
    },
    {
      code: 6009,
      name: "InvalidBankAccount",
      msg: "Invalid Bank account",
    },
    {
      code: 6010,
      name: "BadAccountHealth",
      msg: "Bad account health",
    },
    {
      code: 6011,
      name: "LendingAccountBalanceSlotsFull",
      msg: "Lending account balance slots are full",
    },
    {
      code: 6012,
      name: "BankAlreadyExists",
      msg: "Bank already exists",
    },
    {
      code: 6013,
      name: "IllegalLiquidation",
      msg: "Illegal liquidation",
    },
    {
      code: 6014,
      name: "AccountNotBankrupt",
      msg: "Account is not bankrupt",
    },
    {
      code: 6015,
      name: "BalanceNotBadDebt",
      msg: "Account balance is not bad debt",
    },
    {
      code: 6016,
      name: "InvalidConfig",
      msg: "Invalid group config",
    },
    {
      code: 6017,
      name: "StaleOracle",
      msg: "Stale oracle data",
    },
    {
      code: 6018,
      name: "BankPaused",
      msg: "Bank paused",
    },
    {
      code: 6019,
      name: "BankReduceOnly",
      msg: "Bank is ReduceOnly mode",
    },
    {
      code: 6020,
      name: "BankAccoutNotFound",
      msg: "Bank is missing",
    },
    {
      code: 6021,
      name: "OperationDepositOnly",
      msg: "Operation is deposit-only",
    },
    {
      code: 6022,
      name: "OperationWithdrawOnly",
      msg: "Operation is withdraw-only",
    },
    {
      code: 6023,
      name: "OperationBorrowOnly",
      msg: "Operation is borrow-only",
    },
    {
      code: 6024,
      name: "OperationRepayOnly",
      msg: "Operation is repay-only",
    },
    {
      code: 6025,
      name: "NoAssetFound",
      msg: "No asset found",
    },
    {
      code: 6026,
      name: "NoLiabilityFound",
      msg: "No liability found",
    },
    {
      code: 6027,
      name: "InvalidOracleSetup",
      msg: "Invalid oracle setup",
    },
    {
      code: 6028,
      name: "IllegalUtilizationRatio",
      msg: "Invalid bank utilization ratio",
    },
    {
      code: 6029,
      name: "BankLiabilityCapacityExceeded",
      msg: "Bank borrow cap exceeded",
    },
    {
      code: 6030,
      name: "InvalidPrice",
      msg: "Invalid Price",
    },
    {
      code: 6031,
      name: "IsolatedAccountIllegalState",
      msg: "Account can have only one liablity when account is under isolated risk",
    },
    {
      code: 6032,
      name: "EmissionsAlreadySetup",
      msg: "Emissions already setup",
    },
    {
      code: 6033,
      name: "OracleNotSetup",
      msg: "Oracle is not set",
    },
    {
      code: 6034,
      name: "InvalidSwitchboardDecimalConversion",
      msg: "Invalid swithcboard decimal conversion",
    },
    {
      code: 6035,
      name: "CannotCloseOutstandingEmissions",
      msg: "Cannot close balance because of outstanding emissions",
    },
    {
      code: 6036,
      name: "EmissionsUpdateError",
      msg: "Update emissions error",
    },
    {
      code: 6037,
      name: "AccountDisabled",
      msg: "Account disabled",
    },
    {
      code: 6038,
      name: "AccountTempActiveBalanceLimitExceeded",
      msg: "Account can't temporarily open new balances, please close a balance first",
    },
    {
      code: 6039,
      name: "IllegalBalanceState",
      msg: "Illegal balance state",
    },
  ],
};
