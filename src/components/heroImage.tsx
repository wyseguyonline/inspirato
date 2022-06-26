import React from 'react';

interface HeroImageProps {
  picId: string;
}

const HeroImage = ({ picId }: HeroImageProps) => {
  return (
    <picture>
      <source media="(min-width: 3840px)" srcSet={`https://cms.inspirato.com/ImageGen.ashx?image=/media/${picId}&amp;width=3840&amp;align=center 3840w`} />
      <source media="(min-width: 2048px)" srcSet={`https://cms.inspirato.com/ImageGen.ashx?image=/media/${picId}&amp;width=2048&amp;align=center 2048w`} />
      <source media="(min-width: 1920px)" srcSet={`https://cms.inspirato.com/ImageGen.ashx?image=/media/${picId}&amp;width=1920&amp;align=center 1920w`} />
      <source media="(min-width: 1200px)" srcSet={`https://cms.inspirato.com/ImageGen.ashx?image=/media/${picId}&amp;width=1200&amp;align=center 1200w`} />
      <source media="(min-width: 1080px)" srcSet={`https://cms.inspirato.com/ImageGen.ashx?image=/media/${picId}&amp;width=1080&amp;align=center 1080w`} />
      <source media="(min-width: 828px)" srcSet={`https://cms.inspirato.com/ImageGen.ashx?image=/media/${picId}&amp;width=828&amp;align=center 828w`} />
      <source media="(min-width: 750px)" srcSet={`https://cms.inspirato.com/ImageGen.ashx?image=/media/${picId}&amp;width=750&amp;align=center 750w`} />
      <source media="(min-width: 640px)" srcSet={`https://cms.inspirato.com/ImageGen.ashx?image=/media/${picId}&amp;width=640&amp;align=center 640w`} />
      <source media="(max-width:767px)" srcSet={`https://cms.inspirato.com/ImageGen.ashx?image=/media/${picId}&amp;width=768&amp;height=1400&amp;crop=resize&amp;align=center`} />
      <img alt="" src={`https://cms.inspirato.com/ImageGen.ashx?image=/media/${picId}&amp;width=640&amp;align=center 640w`} />
    </picture>
  );

};

export default HeroImage;