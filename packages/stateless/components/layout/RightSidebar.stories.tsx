import { ComponentMeta, ComponentStory } from '@storybook/react'

import { makeAppContextDecorator } from '@dao-dao/storybook/decorators'

import { RightSidebar, RightSidebarProps } from './RightSidebar'
import { SidebarWallet, SidebarWalletProps } from './SidebarWallet'
import { Connected as ConnectedSidebarWalletStory } from './SidebarWallet.SidebarWallet.stories'

export default {
  title: 'DAO DAO / packages / stateless / components / layout / RightSidebar',
  component: RightSidebar,
  decorators: [makeAppContextDecorator(true)],
  excludeStories: ['DefaultArgs'],
} as ComponentMeta<typeof RightSidebar>

const Template: ComponentStory<typeof RightSidebar> = (args) => (
  <RightSidebar {...args} />
)

export const DefaultArgs: RightSidebarProps = {
  wallet: (
    <SidebarWallet
      {...(ConnectedSidebarWalletStory.args as SidebarWalletProps)}
    />
  ),
}

export const Default = Template.bind({})
Default.args = DefaultArgs
