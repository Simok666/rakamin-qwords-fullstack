
import { Carousel } from 'react-carousel3';
import Blog from './../assets/sliderimage/blog.png';
import Company from './../assets/sliderimage/company.png';
import Dev from './../assets/sliderimage/dev.png';
import Orgs from './../assets/sliderimage/orgs.png';
import School from './../assets/sliderimage/school.png';
import Umkm from './../assets/sliderimage/umkm.png';


const style = {
  width: 350,
  height: 350,
};

const services = [
  {
    title : 'Perusahaan',
    desc  : 'Wujudkan website perusahaan profesional dan berkelas dengan dukungan web hosting terbaik dan fitur keamanan ekstra',
    image : Blog,
  },
  {
    title : 'UMKM dan Toko Online',
    desc  : 'Memberikan hosting terbaik untuk mendukung kebutuhan website pemasaran barang/jasa secara online.',
    image : Company,
  },
  {
    title : 'Organisasi dan Komunitas',
    desc  : 'Bikin website organisasi atau komunitas Anda dengan paket hosting unggulan yang ramah kantong.',
    image : Dev,
  },
  {
    title : 'Sekolah',
    desc  : 'Infrastruktur web hosting terbaik untuk menunjang kegiatan e-learning. Didukung platform MOODLE khusus pembelajaran daring',
    image : Orgs,
  },
  {
    title : 'Developer',
    desc  : 'Memberikan hosting terbaik untuk mendukung kebutuhan website pemasaran barang/jasa secara online.',
    image : School,
  },
  {
    title : 'Blogger dan Personal',
    desc  : 'Memfasilitasi blogger dengan infrastruktur hosting Indonesia terbaik serta template website premium untuk tampil lebih profesional',
    image : Umkm,
  },
  
];

export default function Slider(){
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            background: '',
          }}>
        <Carousel height={460} width={1200} yOrigin={42} yRadius={48} autoPlay={true}>
           {
            services.map((val, index) => {
                return  <div key={index} style={style}>
                    <div className='box-border w-auto shadow-2xl border-orange-600/50 rounded-3xl flex flex-col items-center justify-center bg-orange-500 isolate relative overflow-hidden h-64'> 
                        <div className='px-5 py-10 flex flex-col justify-center'>
                            <div className='flex'>
                              <h1 className='text-2xl text-white pb-5'>{val['title']}</h1>
                            </div>
                            <div>
                                <h3 className='w-3/5 text-white'>
                                  {val['desc']}
                                </h3>
                            </div>
                        </div>
                        <img src={val['image']} alt="" className='absolute bottom-0 right-0'/>
                    </div> 
                </div>      
            })
           }
        </Carousel>
      </div>
    );
}
