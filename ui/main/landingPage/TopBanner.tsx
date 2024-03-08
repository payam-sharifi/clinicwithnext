'use client';
import { styled, Box } from '@mui/material';
//import { useGetPageDataQuery } from '#/redux/services/homeApi';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams } from 'next/navigation';
import 'swiper/css';
import { useEffect } from 'react';
//import { PersistLangLink } from '#/ui/component/MuiLink';
import Link from 'next/link';
import Image from 'next/image';

const BannerImage = styled('img')({});

export default function Page() {
  const param = useParams();
  //const { data } = useGetPageDataQuery({ lang: param.lang });

  return (
    <Swiper
      speed={1500}
      autoplay={{
        delay: 7000,
      }}
      loop
      modules={[Autoplay]}
      slidesPerView={1}
    >
        <SwiperSlide >
          <Box sx={{ width: '100%', height: 'calc(100vw * 600 / 1960)' }}>
            
          
                <BannerImage
                 src="images/2.jpeg"
                 
                   sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 60vw"
                  alt="banner"
                />
        
         
   
          </Box>
        </SwiperSlide>
        <SwiperSlide >
          <Box sx={{ width: '100vw', height: 'calc(100vw * 600 / 1960)' }}>
            
          

        
         
              
              <BannerImage
               src="images/1.jpeg"
                // fill
                 sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 60vw"
                alt="banner"
              />
    
          </Box>
        </SwiperSlide>
        <SwiperSlide >
          <Box sx={{ width: '100vw', height: 'calc(100vw * 600 / 1960)' }}>
            
          

        
         
              
              <BannerImage
               src="images/3.jpeg"
                // fill
                 sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 60vw"
                alt="banner"
              />
    
          </Box>
        </SwiperSlide>
      {/* {data?.data?.contentHomeSlider?.slideShowProSlides?.map((item:any, i:any) => (
        <SwiperSlide key={i + 'swiper1'}>
          <Box sx={{ width: '100vw', height: 'calc(100vw * 600 / 1960)' }}>
            {item.slideShowProLayers ? (
              // <Link href={`${item.slideShowProLayers.filter((i)=>i.linkURL !==" ")[0]?.linkURL}`}>
              <a
                href={`${
                  item.slideShowProLayers.filter((i:any) => i.linkURL !== ' ')[0]
                    ?.linkURL
                }`}
              >
                <BannerImage
                  src={`https://file.pmlm.ir/Content/image/SlideShowPro/12/${item.bgImage}`}
                  // fill
                  // sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 60vw"
                  alt="banner"
                />
              </a>
            ) : (
              //  </Link>
              <BannerImage
                src={`https://file.pmlm.ir/Content/image/SlideShowPro/12/${item.bgImage}`}
                // fill
                // sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 60vw"
                alt="banner"
              />
            )}
          </Box>
        </SwiperSlide>
      ))} */}
    </Swiper>
  );
}
