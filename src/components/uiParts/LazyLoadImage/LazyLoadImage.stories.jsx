import LazyLoadImage from "./LazyLoadImage";

export default {
  title: 'UIParts/Image/LazyLoad',
  component: LazyLoadImage,
}

const Template = (args) => {
  const numbers = [...Array(4).keys()];

  return (
    <>
    { numbers.map(i => <LazyLoadImage 
        key={i}
        src={`${args.src}?random=${i}`}
        alt={args.alt} 
        width={args.width}
        height={args.height}
        option={args.option}
        {...args}
      />)
    }
    </>
  )
};

export const Default = Template.bind({});
Default.args = {
  src: 'https://picsum.photos/600/600',
  alt: 'random',
  width: '604px',
  height: '461px',
  lightest: '#e1e1e1',
  darkest: '#f7f7f7',
}

export const GrayScale = Template.bind({});
GrayScale.args = {
  ...Default.args,
  option: 'grayscale'
}

export const Blur = Template.bind({});
Blur.args = {
  ...Default.args,
  option: 'blur'
}