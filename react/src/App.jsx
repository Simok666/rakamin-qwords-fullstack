import IconRedesignQwords from './assets/logo-qw-light.png';
import IllustrationBanner from './assets/illustration_banner.jpg';
import Arrow from './assets/arrow.png';
import Services from './assets/services_1.jpg';
import IconDisk from './assets/disk.png';
import IconBandwidth from './assets/bandwidth.png';
import IconCpu from './assets/cpu.png';
import IconAddon from './assets/addon.png';
import IconDb from './assets/dbstack.png';
import IconSSl from './assets/ssl.png';
import Account from './Account';
import PropTypes from 'prop-types';
import Slider from './slider/Slider';
import IconBook from './assets/servicesicon/book.png';
import IconCall from './assets/servicesicon/call.png';
import IconDiamond from './assets/servicesicon/diamond.png';
import IconGuard from './assets/servicesicon/guard.png';
import IconNetwork from './assets/servicesicon/networkAlt.png';
import IconRouter from './assets/servicesicon/router.png';
import IconNetwork2 from './assets/servicesicon/network.png';
import IconBig from './assets/customerimage/Big-logo.png';


function App() {
  const menus = [
    'Cloud Hosting',
    'Server',
    'Domain',
    'Email Suite',
    'Services',
    'Internet Access'
  ];

  const services = [
    {
      title : 'Value Cloud Hosting',
      spanTitle : 'VCH1',  
      features : [
        {
          name : "Disk", 
          value : "3GB",
          icon : IconDisk,
        },
        {
          name : "Bandwith", 
          value : "Unlimited",
          icon : IconBandwidth,
        },
        {
          name : "Core CPU", 
          value : "0.5 Core",
          icon : IconCpu,
        },
        {
          name : "Addon / Parked Domain", 
          value : "No",
          icon : IconAddon,
        },
      ],
      price :  'Rp 24.500',
      specialPrice : 'Rp 14.500',
    },
    {
      title : 'Unlimited Hosting',   
      spanTitle : 'Signature',
      features : [
        {
          name : "Disk", 
          value : "Unlimited",
          icon : IconDisk,
        },
        {
          name : "Bandwith", 
          value : "Unlimited",
          icon : IconBandwidth,
        },
        {
          name : "Core CPU", 
          value : "1 Core",
          icon : IconCpu,
        },
        {
          name : "Addon / Parked Domain", 
          value : "5 / 5",
          icon : IconAddon,
        },
      ],
      price :  'Rp 114.000',
      specialPrice : 'Rp 89.900',
    },
    {
      title : 'High Performance',  
      spanTitle : 'HPCH Bisnis 1', 
      features : [
        {
          name : "Disk", 
          value : "3 GB",
          icon : IconDisk,
        },
        {
          name : "Bandwith", 
          value : "Unlimited",
          icon : IconBandwidth,
        },
        {
          name : "Core CPU", 
          value : "1 Core",
          icon : IconCpu,
        },
        {
          name : "Addon / Parked Domain", 
          value : "-",
          icon : IconAddon,
        },
      ],
      price :  'Rp 109.000',
      specialPrice : 'Rp 79.000',
    },
    {
      title : 'Cloud VPS KVM SSD',
      spanTitle : 'VPS SC1', 
      features : [
        {
          name : "Disk", 
          value : "25 GB",
          icon : IconDisk,
        },
        {
          name : "Bandwith", 
          value : "Unlimited",
          icon : IconBandwidth,
        },
        {
          name : "Core CPU", 
          value : "1 Core",
          icon : IconCpu,
        },
        {
          name : "Addon / Parked Domain", 
          value : "Unlimited",
          icon : IconAddon,
        },
      ],
      price :  'Rp 135.000',
      specialPrice : 'Rp 75.000',
    },
  
  ];
  
  const anotherServices = [
    {
      title: 'SSL',
      icon : IconSSl,
      desc : 'Jadikan website Anda lebih terpercaya dan disukai oleh search engine dengan menggunakan SSL Certificate.',
      price: 'Rp. 112.000 / tahun'
    },
    {
      title: 'Dedicated Server',
      icon : IconDb,
      desc : 'Nikmati kelola Dedicated Server sendiri dengan akses remote dari seluruh dunia tanpa batas ',
      price: 'Rp. 499.000 / bulan'
    },
    {
      title: 'Colocation Server',
      icon : IconDisk,
      desc : 'Nikmati kelola Dedicated Server sendiri dengan akses remote dari seluruh dunia tanpa batas ',
      price: 'Rp. 500.000 / bulan'
    },
  ];
  const commitment = [
    {
      icon  : IconCall,
      title : 'Layanan 24/7',
      desc  : 'Tim Technical Support dan Customer Service Qwords siap membantu Anda selama 24 jam, 7 hari. Anda dapat menghubungi melalui Live chat, Call Center, dan Support Ticket.', 
    },
    {
      icon  : IconBook,
      title : 'Panduan Manual Lengkap',
      desc  : 'Qwords dilengkapi dengan halaman knowledge base berisi tutorial dan tips seputar pengelolaan website dan hosting. Dapat diakses dengan mudah dan solutif ', 
    },
    {
      icon  : IconRouter,
      title : 'Up time 99.99%',
      desc  : 'Uptime Network & Server di atas 99. 99% dengan konfigurasi server yang tepat. Didukung manajemen jaringan dan multiple upstream tier 1 provider network serta multiple peering.', 
    },
    {
      icon  : IconGuard,
      title : 'Jaminan keamanan',
      desc  : 'Keamanan menjadi fokus utama kami di Qwords. Tindakan pemantauan dan pencegahan yang berstandar & berkelanjutan telah menjadi perhatian utama kami.', 
    },
    {
      icon  : IconNetwork,
      title : 'Clustered DNS',
      desc  : 'DNS Server Cloud Hosting Qwords terhubung satu dengan yang lainnya. Hal ini membuat DNS Server akan selalu dapat di akses karena saling membackup antar server.', 
    },
    {
      icon  :  IconDiamond,
      title : 'High Enterprise Server',
      desc  : 'Tim Technical Support dan Customer Service Qwords siap membantu Anda selama 24 jam, 7 hari. Anda dapat menghubungi melalui Live chat, Call Center, dan Support Ticket.', 
    },
    {
      icon  :  IconRouter,
      title : 'Tier 1 Network',
      desc  : 'Tim Technical Support dan Customer Service Qwords siap membantu Anda selama 24 jam, 7 hari. Anda dapat menghubungi melalui Live chat, Call Center, dan Support Ticket.', 
    },
    {
      icon  :  IconNetwork2,
      title : 'Peering Network',
      desc  : 'Tim Technical Support dan Customer Service Qwords siap membantu Anda selama 24 jam, 7 hari. Anda dapat menghubungi melalui Live chat, Call Center, dan Support Ticket.', 
    },
  ]
  return (
    <div className='bg-white'>
      <header
        className='container max-w-7xl mx-auto flex flex-row pt-12 items-center space-x-36 justify-between'>
        <div>
          <img src={IconRedesignQwords} alt="icon-redesignqwords" className='w-36'/>
        </div>
        <div className='flex space-x-10 items-center'>
          <div className='flex-1'>
            <ul className='flex flex-row space-x-10'>
              {menus.map((val, index) => (
                <li className="font-extrabold" key={index}>{val}</li>
              ))}
            </ul>
          </div>
          <div className='space-x-6 flex flex-row items-center'>
            <Account/>
          </div>
        </div>
      </header>
      <main className='flex flex-col justify-center align-middle mx-auto'>
        <div id='banner' className='flex py-10 px-16'>
          <div className='m-auto'>
            <h1 className='font-extrabold text-6xl pb-5'>
              Cloud Hosting untuk
              <br/>
              <span className='font-extrabold text-6xl pb-5 text-orange-600 '>
                Kesuksesan Websitemu!
              </span>
            </h1>
            <div className='font-semibold text-base pb-12'>
              Qwords menawarkan layanan Cloud Hosting yang Cepat, Aman, dan Dukungan 24 jam
              untuk memenuhi kebutuhan hosting Anda. Tersertifikasi ISO 27001 dengan Data
              Center Tier 3.
            </div>
            <button
              className='py-7 px-16 bg-orange-600 rounded-md text-white drop-shadow-3xl hover:bg-orange-700'>Cek Domain Dulu</button>
          </div>
          <div className='m-auto'>
            <img src={IllustrationBanner} alt="IllsutrationBanner" className='w-[60rem]'/>
          </div>
        </div>

        <div id='search-domain' className='flex justify-center align-middle px-16'>
          <div
            className='bg-[url("src/assets/cekdomain_banner.png")] drop-shadow-3xl  text-center w-[80vw] h-[70vh] bg-no-repeat m-auto bg-center flex flex-col justify-center align-middle'>
            <h1 className='text-6xl pb-8 text-white'>
              Atau, mulai dengan
              <br/>
              <span className='text-orange-600 '>
                Cari
              </span>
              nama domain
            </h1>
            <div className='font-semibold text-base pb-12 text-white'>
              1 domain hanya bisa dimiliki 1 orang.
              <br/>
              Amankan dulu domain pilihanmu melalui form di bawah.
            </div>
            <div className='flex flex-row justify-center space-x-6'>
              <input
                type="text"
                name="text"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  w-2/4 rounded-full sm:text-sm focus:ring-1"
                placeholder="Temukan Nama Domain"/>
              <button
                className='py-4 px-6 bg-orange-600 rounded-full text-white drop-shadow-3xl hover:bg-orange-700'>Cek Domain Dulu</button>
            </div>
            <div className='w-32 -ml-10 -mt-40'>
              <img src={Arrow} alt="" />
            </div>
          </div>
        </div>
        
        <div id='services-title' className='flex flex-col items-center pt-10 px-16'>
           <div className='m-auto text-center flex flex-col justify-center align-middle'>
            <h1 className='text-6xl pb-5'>
              Cloud Hosting Indonesia
              <br />
              <span className='font-extrabold text-6xl pb-5 text-orange-600 pb-5'>
              Diskon Hingga 50%
              </span>
            </h1>
            <div className='font-semibold text-base'>
                Layanan cloud hosting indonesia terbaik dengan teknologi andal untuk website anda
            </div>
           </div>
        </div>
        
        <div id='services' className='grid grid-cols-4 space-x-6 py-10 px-16'>
              {
                services.map((val, key) => {
                  return <CardPlan key = {key} {...val} />;
                })
              }
        </div>
        
        <div id='another-services' className='flex flex-col justify-center items-center bg-orange-500/10'>
          <div className='pt-10'>
            <h2 className='text-5xl pb-5'>Lihat Juga Layanan Kami Yang Lain</h2>
            <h3 className='font-black'>Optimalkan performa website bisnis Anda dengan berbagai layanan berkualitas dari Qwords </h3>
          </div>
          <div className='grid grid-cols-3 space-x-6 py-10 px-16'>
              {
                anotherServices.map((val, key) => {
                  return <AnotherCard key = {key} {...val} />;
                })
              }
          </div>
        </div>
        
        <div id='solution' className='flex flex-col justify-center items-center mx-auto'>
              <div className='text-center pt-10 px-10 w-4/5 mx-auto'>
                  <h2 className='text-5xl pb-5'>Solusi Paket Hosting Terbaik dari Kami</h2>
                  <h3 className='font-black mx-auto my-4'>Kami menawarkan solusi paket hosting terbaik untuk segala kebutuhan website dan sistem Anda. Mulai dari blog hingga website bisnis dan perusahaan. </h3>
              </div>
              <div className='pt-14'>      
                  <Slider/>
              </div>
        </div>
              
        <div id='commitment' className='flex flex-col'>
              <div className='grid grid-cols-3 gap-4 text-center pt-5 px-10'>
                  <div className='col-span-2 ml-[420px]'>
                    <h2 className='text-6xl'>
                    Komitmen 
                    <span className='font-extrabold text-6xl pb-5 text-orange-600 pb-5'>
                    Qwords
                    </span></h2>
                  </div>
                  <div className='ml-[300px]'>
                    <img src={Arrow} alt="" className='w-28 h-auto' />
                  </div> 
              </div>
              <div className='w-1/2 text-center  mx-auto'>
                <h3 className='font-black mx-auto my-4'>Kami menawarkan solusi paket hosting terbaik untuk segala kebutuhan website dan sistem Anda. Mulai dari blog hingga website bisnis dan perusahaan. </h3>
              </div>
              <div className='grid grid-cols-4 space-x-3 py-10 px-16'>
              {
                commitment.map((val, key) => {
                  return <CommitmentCard key = {key} {...val} />;
                })
              }
              </div>
        </div>

        <div id='customer' className='flex py-10 px-16  bg-gray-500/10'>
          <div className='m-auto grid grid-cols-3 gap-4'>
              <div className='pt-24'>
                <h1 className='font-extrabold text-6xl pb-5'>
                    Telah Dipercaya oleh
                  <br/>
                  <span className='font-extrabold text-6xl pb-5 text-orange-600 '>
                    45.000+ Pelanggan Aktif
                  </span>
                </h1>
                <div className='font-semibold text-base pb-12'>
                  Website telah terdaftar bersama kami. Sebelum kamu juga daftar, ketahui bahwa pilihanmu tepat karena kami ada & berkembang sejak tahun 2007.
                </div>
              </div>
              <div className='col-span-2'>
                  <img src={IconBig} alt="" />
              </div>
            </div>
        </div>

        <div></div>

      </main>
    </div>
  )
}

function CardPlan({ title, spanTitle, price, specialPrice, features }){
  return <div className='border shadow-2xl border-orange-600/50 rounded-md flex flex-col items-center justify-center pt-16 pb-8 '>
            <div className='space-y-5 flex flex-col justify-center items-center'>
              <img src={Services} alt="" className='w-24'/>
              <h2 className='text-2xl'>{title}</h2>
              <h3 className='font-black'>{spanTitle}</h3>
              <div>
              {
                features.map((val, index) => {
                  return (
                    <div key= {index} className='flex flex-row mr-2 items-center'>  
                        <img src={val['icon']} alt="" />
                        <div className='py-3 px-5'>
                          {val['name']}
                          <p className='font-black'>{val['value']}</p>
                        </div>
                    </div>
                  ); 
                })
              }
              </div>
            </div>
            <div className='m-auto text-center py-5'>
              <div className='text-xl line-through text-gray-500 decoration-gray-500'>{price}</div>
              <div className='text-2xl text-orange-600'>{specialPrice}</div>
              <div className='pt-5'>
                <button className='py-2  px-10 bg-orange-600 hover:bg-orange-700 text-white rounded-full'>Pesan Sekarang</button>
              </div>
            </div>
          </div>
}

function AnotherCard({title, icon, desc, price}){
    return <div className='border shadow-2xl border-orange-600/50  rounded-3xl flex flex-col items-center justify-center pt-16 pb-8 '>
    <div className='space-y-5 space-x-10 flex flex-col justify-center items-center'>
      <div className='flex'>
        <img src={icon} alt="" className='  w-8'/>
        <h2 className='text-xl'>{title}</h2>
      </div>
      <div>
        <h1>
          {desc}
        </h1>
      </div>
    </div>
    <div className='m-auto text-center py-5'>
      <div className='text-2xl text-orange-600 px-10'>{price}</div>
      <div className='pt-5'>
        <button className='py-2  px-10 bg-orange-600 hover:bg-orange-700 text-white rounded-full'>Pesan Sekarang</button>
      </div>
    </div>
  </div>
}

function CommitmentCard({icon, title, desc}){
  return <div className='flex flex-col items-center justify-center pt-8 pb-8 '>
    <div className='space-y-5 flex flex-col justify-center items-center'>
    <img src={icon} alt="" className='  w-8'/>
      <div className='flex'>
        <h2 className='text-xl'>{title}</h2>
      </div>
      <div className=' w-3/4'>
        <h1>
          {desc}
        </h1>
      </div>
    </div>
  </div>
}

CardPlan.propTypes = {
  title: PropTypes.string.isRequired,
  spanTitle: PropTypes.string,
  price: PropTypes.string.isRequired,
  specialPrice: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

AnotherCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,

};

CommitmentCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default App
