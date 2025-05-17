import { useEffect, useState } from 'react';
import { useLazyLoadImage, getAdaptiveImageSrc, useViewportWidth, updateMetaTags } from './lib/utils';
import { useSecurity } from './lib/security';
import './App.css';
import heroImage from './assets/images/hero-image.jpg';
import service1 from './assets/images/services/service-1.jpg';
import service2 from './assets/images/services/service-2.jpg';
import service3 from './assets/images/services/service-3.jpg';
import service4 from './assets/images/services/service-4.jpg';
import service5 from './assets/images/services/service-5.jpg';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const viewportWidth = useViewportWidth();
  
  // Apply all security features
  useSecurity();

  // Update meta tags on component mount
  useEffect(() => {
    updateMetaTags(
      'سطحة هيدروليك - خدمات نقل السيارات بأمان وسرعة',
      'نقدم خدمات نقل السيارات بأمان وسرعة، مع توفير أفضل تجربة للمستخدم. خدماتنا تشمل نقل السيارات من وإلى مراكز الصيانة، مراكز التقديرات، مراكز الفحص الدوري، ونقل السيارات بين المدن.'
    );
  }, []);

  // Handle scroll event for back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Lazy load hero image
  const heroImg = useLazyLoadImage({
    src: getAdaptiveImageSrc(heroImage, viewportWidth),
    alt: 'سطحة هيدروليك',
    className: 'absolute inset-0 w-full h-full object-cover no-drag'
  });

  // Lazy load service images
  const serviceImg1 = useLazyLoadImage({
    src: getAdaptiveImageSrc(service1, viewportWidth),
    alt: 'نقل السيارات من وإلى مراكز الصيانة',
    className: 'service-image no-drag'
  });

  const serviceImg2 = useLazyLoadImage({
    src: getAdaptiveImageSrc(service2, viewportWidth),
    alt: 'نقل السيارات من وإلى مراكز التقديرات',
    className: 'service-image no-drag'
  });

  const serviceImg3 = useLazyLoadImage({
    src: getAdaptiveImageSrc(service3, viewportWidth),
    alt: 'نقل السيارات من وإلى مراكز الفحص الدوري',
    className: 'service-image no-drag'
  });

  const serviceImg4 = useLazyLoadImage({
    src: getAdaptiveImageSrc(service4, viewportWidth),
    alt: 'نقل السيارات بين المدن',
    className: 'service-image no-drag'
  });

  const serviceImg5 = useLazyLoadImage({
    src: getAdaptiveImageSrc(service5, viewportWidth),
    alt: 'يوجد زلاجات في حال عدم عمل القير',
    className: 'service-image no-drag'
  });

  return (
    <div className="app no-select">
      {/* Header */}
      <header className="bg-gradient-primary text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">سطحة هيدروليك</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <img 
          ref={heroImg.imgRef}
          {...heroImg.imgProps}
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">سطحة هيدروليك</h1>
          <p className="text-xl md:text-2xl mb-8 text-white animate-fade-in">نقدم خدمات نقل السيارات بأمان وسرعة، مع توفير أفضل تجربة للمستخدم</p>
          <div className="animate-pulse">
            <a 
              href="tel:+966500000000" 
              className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 inline-block"
            >
              اتصل بنا الآن
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">خدماتنا</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="service-card animate-fade-in">
              <img 
                ref={serviceImg1.imgRef}
                {...serviceImg1.imgProps}
              />
              <div className="service-content">
                <h3 className="text-xl font-bold mb-3">نقل السيارات من وإلى مراكز الصيانة</h3>
                <p className="text-gray-700">
                  نوفر خدمة نقل آمنة وسريعة للسيارات المتعطلة أو التي تحتاج لصيانة دورية، من موقع العميل إلى مركز الصيانة المعتمد، والعكس، باستخدام سطحه هيدروليك مجهزة بالكامل. نحن نضمن سلامة سيارتك خلال عملية النقل ونلتزم بالمواعيد المحددة لتوفير تجربة خالية من المتاعب.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                ref={serviceImg2.imgRef}
                {...serviceImg2.imgProps}
              />
              <div className="service-content">
                <h3 className="text-xl font-bold mb-3">نقل السيارات من وإلى مراكز التقديرات</h3>
                <p className="text-gray-700">
                  نقوم بنقل السيارات المتضررة إلى مراكز تقدير الحوادث المعتمدة بكل احترافية، لتسريع إجراءات التأمين والتقييم الفني بدقة وسلاسة. فريقنا المتخصص يتعامل مع السيارات المتضررة بعناية فائقة لضمان عدم حدوث أي ضرر إضافي أثناء النقل، مما يساعد في الحصول على تقييم دقيق للأضرار.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                ref={serviceImg3.imgRef}
                {...serviceImg3.imgProps}
              />
              <div className="service-content">
                <h3 className="text-xl font-bold mb-3">نقل السيارات من وإلى مراكز الفحص الدوري</h3>
                <p className="text-gray-700">
                  نساعدك في إيصال سيارتك إلى مركز الفحص الدوري واستلامها بعد الانتهاء، مع الالتزام التام بالمواعيد وضمان سلامة المركبة أثناء النقل. هذه الخدمة توفر عليك الوقت والجهد، خاصة إذا كانت سيارتك تحتاج إلى صيانة قبل الفحص أو كنت مشغولاً بالتزامات أخرى. نحن نضمن إتمام العملية بسلاسة وكفاءة.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <img 
                ref={serviceImg4.imgRef}
                {...serviceImg4.imgProps}
              />
              <div className="service-content">
                <h3 className="text-xl font-bold mb-3">نقل السيارات بين المدن</h3>
                <p className="text-gray-700">
                  خدمة مخصصة لنقل السيارات بين مختلف مدن المملكة بكل أمان، مع تغطية واسعة وسائقين ذوي خبرة لضمان تسليم المركبة في الوقت المحدد. سواء كنت تنتقل إلى مدينة جديدة أو اشتريت سيارة من مدينة أخرى، نحن نوفر لك حلاً موثوقاً لنقل سيارتك بأمان تام وبأعلى معايير الجودة، مع إمكانية تتبع عملية النقل خطوة بخطوة.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <img 
                ref={serviceImg5.imgRef}
                {...serviceImg5.imgProps}
              />
              <div className="service-content">
                <h3 className="text-xl font-bold mb-3">يوجد زلاجات في حال عدم عمل القير</h3>
                <p className="text-gray-700">
                  لتوفير أقصى درجات السلامة، نستخدم زلاجات خاصة لسحب السيارات التي لا يعمل فيها القير، دون التسبب بأي ضرر أثناء التحميل أو النقل. هذه التقنية المتطورة تضمن حماية ناقل الحركة من أي ضرر إضافي أثناء عملية السحب، وتعتبر الحل الأمثل للسيارات ذات الدفع الرباعي أو السيارات الفاخرة التي تتطلب عناية خاصة أثناء النقل.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <h2 className="text-4xl font-bold mb-6">من نحن</h2>
              <p className="text-gray-700 mb-4">
                نحن شركة متخصصة في خدمات نقل السيارات باستخدام أحدث سطحات هيدروليك مجهزة بأفضل التقنيات. نسعى دائماً لتقديم خدمة استثنائية تلبي احتياجات عملائنا وتفوق توقعاتهم من حيث الجودة والسرعة والأمان.
              </p>
              <p className="text-gray-700 mb-4">
                يتكون فريقنا من سائقين محترفين ذوي خبرة طويلة في مجال نقل السيارات، مدربين على التعامل مع مختلف أنواع المركبات وحالات النقل. نحن نغطي جميع مناطق المملكة ونوفر خدمة على مدار الساعة طوال أيام الأسبوع.
              </p>
              <p className="text-gray-700">
                نفتخر بامتلاكنا أسطولاً حديثاً من السطحات الهيدروليكية المجهزة بأحدث التقنيات لضمان نقل آمن وسريع للسيارات. كما نلتزم بأعلى معايير الجودة والسلامة في جميع عملياتنا، ونسعى دائماً لتطوير خدماتنا لتلبية احتياجات عملائنا المتغيرة.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-primary p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">لماذا تختارنا؟</h3>
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-white mb-2">سرعة الاستجابة</h4>
                  <p className="text-white opacity-90">
                    نصل إليك في أسرع وقت ممكن، أينما كنت داخل نطاق خدمتنا، لنقل سيارتك بكفاءة وأمان.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-white mb-2">أسطول حديث</h4>
                  <p className="text-white opacity-90">
                    نمتلك أحدث سطحات هيدروليك مجهزة بأفضل التقنيات لضمان نقل آمن وسلس لسيارتك.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-white mb-2">فريق محترف</h4>
                  <p className="text-white opacity-90">
                    سائقونا مدربون على أعلى مستوى للتعامل مع جميع أنواع السيارات وحالات النقل المختلفة.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">تغطية واسعة</h4>
                  <p className="text-white opacity-90">
                    نقدم خدماتنا في جميع أنحاء المملكة، مع خدمة خاصة للنقل بين المدن.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-2">سطحة هيدروليك</h2>
              <p className="text-white opacity-90">خدمات نقل السيارات بأمان وسرعة</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white opacity-90">جميع الحقوق محفوظة &copy; {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <a href="tel:+966500000000" className="floating-button phone">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
      <a href="https://wa.me/966500000000" className="floating-button whatsapp">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </a>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}

export default App;
