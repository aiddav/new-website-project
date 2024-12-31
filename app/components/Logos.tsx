import Image from 'next/image'

export default function Logos() {
    const logos = [
    { 
      name: 'Oxford University', 
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Oxford-University-Circlet.svg'
    },
    { 
      name: 'Harvard University', 
      src: 'https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png'
    },
    { 
      name: 'University College Cork', 
      src: 'https://findlogovector.com/wp-content/uploads/2019/04/university-college-cork-ucc-logo-vector.png'
    },
    { 
      name: 'Y Combinator', 
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg'
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div key={logo.name} className="w-32 aspect-[2/1] relative flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

