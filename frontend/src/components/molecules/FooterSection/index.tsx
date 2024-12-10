import LinkItem from 'src/components/atoms/LinkItem';
import Subheading from 'src/components/atoms/Subheading';

const FooterSection = () => {
  return (
    <section className="border-t-[2px] border-[#323250] bg-[#1e1e2f] text-center pt-8">
      <Subheading className="text-[#e0e0e0] text-center text-[16px]">
        This is a clone of the{' '}
        <LinkItem
          href="https://neetcode.io/"
          target="_blank"
          className="text-[#28d3a0]"
        >
          NeetCode
        </LinkItem>
        {''} website, created for the Code Breakers hackathon to help our PSPs
        practice algorithms and data structures.
      </Subheading>
      <br />
      <br />
      <Subheading className="text-[#e0e0e0] text-center text-[16px]">
        Made by{' '}
        <LinkItem
          href="https://github.com/gbnunes7"
          target="_blank"
          className="text-center text-[#28d3a0]"
        >
          Gabriel Melo
        </LinkItem>
      </Subheading>
    </section>
  );
};

export default FooterSection;
