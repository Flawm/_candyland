/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category CreateOrModifyListing
 * @category generated
 */
export type CreateOrModifyListingInstructionArgs = {
  price: beet.bignum
  dataHash: number[] /* size: 32 */
  creatorHash: number[] /* size: 32 */
  nonce: beet.bignum
  index: number
  root: number[] /* size: 32 */
}
/**
 * @category Instructions
 * @category CreateOrModifyListing
 * @category generated
 */
export const createOrModifyListingStruct = new beet.BeetArgsStruct<
  CreateOrModifyListingInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['price', beet.u64],
    ['dataHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['creatorHash', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['nonce', beet.u64],
    ['index', beet.u32],
    ['root', beet.uniformFixedSizeArray(beet.u8, 32)],
  ],
  'CreateOrModifyListingInstructionArgs'
)
/**
 * Accounts required by the _createOrModifyListing_ instruction
 *
 * @property [_writable_, **signer**] owner
 * @property [] formerDelegate
 * @property [] newDelegate
 * @property [] bubblegumAuthority
 * @property [] gummyroll
 * @property [_writable_] merkleSlab
 * @property [] bubblegum
 * @category Instructions
 * @category CreateOrModifyListing
 * @category generated
 */
export type CreateOrModifyListingInstructionAccounts = {
  owner: web3.PublicKey
  formerDelegate: web3.PublicKey
  newDelegate: web3.PublicKey
  bubblegumAuthority: web3.PublicKey
  gummyroll: web3.PublicKey
  merkleSlab: web3.PublicKey
  bubblegum: web3.PublicKey
}

export const createOrModifyListingInstructionDiscriminator = [
  36, 247, 75, 240, 177, 100, 167, 57,
]

/**
 * Creates a _CreateOrModifyListing_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateOrModifyListing
 * @category generated
 */
export function createCreateOrModifyListingInstruction(
  accounts: CreateOrModifyListingInstructionAccounts,
  args: CreateOrModifyListingInstructionArgs
) {
  const {
    owner,
    formerDelegate,
    newDelegate,
    bubblegumAuthority,
    gummyroll,
    merkleSlab,
    bubblegum,
  } = accounts

  const [data] = createOrModifyListingStruct.serialize({
    instructionDiscriminator: createOrModifyListingInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: owner,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: formerDelegate,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: newDelegate,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: bubblegumAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: gummyroll,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: merkleSlab,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: bubblegum,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey(
      '9T5Xv2cJRydUBqvdK7rLGuNGqhkA8sU8Yq1rGN7hExNK'
    ),
    keys,
    data,
  })
  return ix
}