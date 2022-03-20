import TimeLine from "./TimeLine/TimeLine";
import TimeLineArrow from "./TimeLineArrow/TimeLineArrow";
import TimeLineContent from "./TimeLineContent/TimeLineContent"

export default {
  title: 'UIParts/TimeLine',
}

const Template = (args) => <TimeLineContent {...args}/>;
export const Content = Template.bind({});
Content.args = {
  title: 'Example Company',
  roll: 'Example Roll',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non pulvinar augue, eget lobortis orci. Aenean eu fermentum sem, quis placerat sapien. Vivamus eu augue in massa elementum scelerisque. Maecenas ultricies sem a massa aliquam mollis. Aliquam dolor est, cursus ac tincidunt ut, fermentum id elit. Duis euismod ligula non ante mollis vulputate. Cras consectetur ante dolor, vel feugiat metus tristique sed. Sed consectetur sapien eu aliquam aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
}

const Template2 = (args) => <TimeLineArrow {...args}/>
export const Arrow = Template2.bind({});
Arrow.args = {
  id: 1,
  start: "04/2013"
};

const Template3 = (args) => <TimeLine {...args}/>
export const TimeLinePanel = Template3.bind({});
TimeLinePanel.args = {
  ...Content.args,
  ...Arrow.args,
}