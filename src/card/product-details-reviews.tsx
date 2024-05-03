import Markdown from 'src/components/markdown';

// ----------------------------------------------------------------------

type Props = {
  reviews: string;
};

export default function ProductDetailsReviews({ reviews }: Props) {
  return (
    <Markdown
      children={reviews}
      sx={{
        p: 3,
        '& p, li, ol': {
          typography: 'body2',
        },
        '& ol': {
          p: 0,
          display: { md: 'flex' },
          listStyleType: 'none',
          '& li': {
            '&:first-of-type': {
              minWidth: 240,
              mb: { xs: 0.5, md: 0 },
            },
          },
        },
      }}
    />
  );
}
