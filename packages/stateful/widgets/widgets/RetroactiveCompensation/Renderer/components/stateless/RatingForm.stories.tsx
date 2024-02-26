import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CHAIN_ID } from '@dao-dao/storybook'
import { TokenType } from '@dao-dao/types'
import { getNativeTokenForChainId } from '@dao-dao/utils'

import {
  AddressInput,
  EntityDisplay,
  Trans,
} from '../../../../../../components'
import { makeSurvey } from './ContributionForm.stories'
import { RatingForm } from './RatingForm'

export default {
  title:
    'DAO DAO / packages / stateful / payroll / adapters / Retroactive / components / stateless / RatingForm',
  component: RatingForm,
} as ComponentMeta<typeof RatingForm>

const Template: ComponentStory<typeof RatingForm> = (args) => (
  <RatingForm {...args} />
)

export const Default = Template.bind({})
Default.args = {
  status: {
    survey: makeSurvey(),
    contribution: 'this is my contribution\n\npls give me money',
    contributionSelfRatings: null,
    rated: false,
  },
  data: {
    contributions: [
      {
        id: 1,
        contributor: {
          publicKey: 'publicKey1',
          address: 'juno1',
        },
        content: 'I did stuff',
        ratings: [20, 40],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 2,
        contributor: {
          publicKey: 'publicKey2',
          address: 'juno2',
        },
        content: 'I did other stuff\n:D',
        ratings: [20, 40],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    existingRatings: [],
  },
  onSubmit: async (data) =>
    alert('submit: ' + JSON.stringify(data, undefined, 2)),
  loadingSubmit: false,
  EntityDisplay,
  AddressInput,
  Trans,
  tokenPrices: [
    {
      token: {
        chainId: CHAIN_ID,
        type: TokenType.Cw20,
        denomOrAddress: 'dao',
        symbol: 'DAO',
        decimals: 6,
        imageUrl: '/daodao.png',
        source: {
          chainId: CHAIN_ID,
          type: TokenType.Cw20,
          denomOrAddress: 'dao',
        },
      },
      usdPrice: 1,
      timestamp: new Date(),
    },
    {
      token: getNativeTokenForChainId(CHAIN_ID),
      usdPrice: 1,
      timestamp: new Date(),
    },
  ],
}
