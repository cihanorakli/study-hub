import React from 'react';
import { ArrowLeft, Scale, ShieldCheck } from 'lucide-react';

type LegalPageKind = 'privacy' | 'terms';

interface LegalPageProps {
  kind: LegalPageKind;
}

const lastUpdated = '3 Ekim 2026';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="space-y-3">
    <h2 className="text-lg sm:text-xl font-bold text-gray-950">{title}</h2>
    <div className="space-y-3 text-sm leading-7 text-gray-600">{children}</div>
  </section>
);

export const LegalPage: React.FC<LegalPageProps> = ({ kind }) => {
  const isPrivacy = kind === 'privacy';
  const Icon = isPrivacy ? ShieldCheck : Scale;
  const title = isPrivacy ? 'Gizlilik Politikası' : 'Kullanım Koşulları';

  return (
    <main className="flex-grow bg-[#F8F9FA] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Ana sayfaya dön
        </a>

        <article className="mt-6 rounded-3xl bg-white border border-gray-200 shadow-sm overflow-hidden">
          <header className="p-7 sm:p-10 bg-[#0D0F13] text-white">
            <Icon className="w-8 h-8 text-brand-400 mb-5" />
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-brand-300">STUDY HUB .SOFIA</p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
            <p className="mt-4 text-sm text-gray-300">Son güncelleme: {lastUpdated}</p>
          </header>

          <div className="p-7 sm:p-10 space-y-9">
            {isPrivacy ? <PrivacyContent /> : <TermsContent />}
          </div>
        </article>
      </div>
    </main>
  );
};

const PrivacyContent = () => (
  <>
    <Section title="1. Kapsam ve veri sorumlusu">
      <p>Bu politika, STUDY HUB .SOFIA web sitesini, teklif/talep formunu ve WhatsApp üzerinden yapılan iletişimleri kapsar. Hizmetlerimiz Sofya, Bulgaristan’dan sunulur; kişisel verileri AB Genel Veri Koruma Tüzüğü (GDPR) ve uygulanabilir Bulgaristan mevzuatına uygun şekilde işleriz.</p>
      <p>Bu politika, hangi bilgileri neden topladığımızı, nasıl kullandığımızı ve haklarınızı açıklar. Siteyi kullanarak bu politikayı okuduğunuzu kabul edersiniz.</p>
    </Section>
    <Section title="2. Topladığımız bilgiler">
      <ul className="list-disc pl-5 space-y-1">
        <li>Ad, e-posta adresi, telefon/WhatsApp numarası ve tercih ettiğiniz iletişim kanalı.</li>
        <li>Üniversite, bölüm, proje gereksinimleri, teslim tarihi, bütçe aralığı ve tarafınızdan gönderilen mesajlar/dosyalar.</li>
        <li>Güvenlik, hata ayıklama ve hizmet iyileştirme için cihaz, tarayıcı, IP, tarih-saat ve temel kullanım kayıtları; bunlar yalnızca altyapımız veya kullandığımız hizmetler tarafından gerekli olduğu ölçüde işlenir.</li>
      </ul>
      <p>Lütfen gereksiz hassas veri, kimlik belgesi, ödeme kartı bilgisi, sağlık verisi veya başkalarına ait gizli bilgi göndermeyin. Gönderdiğiniz içerik için gerekli izinlere sahip olduğunuzu beyan edersiniz.</p>
    </Section>
    <Section title="3. İşleme amaçları ve hukuki dayanak">
      <p>Verileri talebinizi değerlendirmek, sizinle iletişim kurmak, teklif ve hizmet sağlamak, dosya/proje gereksinimlerini yönetmek, güvenliği korumak, yasal yükümlülükleri yerine getirmek ve uyuşmazlıkları çözmek için kullanırız. Dayanaklarımız; sözleşme öncesi talebiniz veya sözleşmenin ifası, meşru menfaatlerimiz, yasal yükümlülükler ve gerektiğinde açık rızanızdır.</p>
    </Section>
    <Section title="4. Paylaşım, WhatsApp ve uluslararası aktarımlar">
      <p>Verilerinizi satmayız, kiralamayız veya reklâm amaçlı üçüncü kişilerle paylaşmayız. Veriler; barındırma, güvenlik, form, dosya paylaşımı veya iletişim altyapısı sağlayıcıları ile yalnızca hizmet için gerekli ölçüde, gizlilik ve güvenlik yükümlülükleri altında paylaşılabilir. WhatsApp üzerinden iletişim kurduğunuzda Meta/WhatsApp’ın kendi gizlilik koşulları ayrıca geçerlidir ve verileriniz AB dışına aktarılabilir.</p>
    </Section>
    <Section title="5. Saklama süresi ve güvenlik">
      <p>Talep ve proje kayıtlarını, işimizi yürütmek ve olası yasal talepleri yönetmek için gerekli süre boyunca saklarız; hizmet tamamlandığında veya talep kapandığında gereksiz verileri siler ya da anonimleştiririz. Yasa başka bir saklama süresi gerektiriyorsa buna uyarız. Yetkisiz erişim, kayıp ve değişikliğe karşı makul teknik ve organizasyonel önlemler uygularız; ancak internet üzerinden hiçbir aktarımın mutlak güvenliği garanti edilemez.</p>
    </Section>
    <Section title="6. Haklarınız">
      <p>GDPR kapsamında erişim, düzeltme, silme, işlemeyi kısıtlama, itiraz, veri taşınabilirliği ve rızayı geri çekme haklarına sahip olabilirsiniz. Taleplerinizi WhatsApp numaramız üzerinden iletebilirsiniz. Kimliğinizi doğrulamak için makul bilgi isteyebiliriz. Ayrıca ikamet ettiğiniz ülkedeki yetkili veri koruma otoritesine şikâyet hakkınız vardır.</p>
    </Section>
    <Section title="7. Çerezler, üçüncü taraf bağlantıları ve çocuklar">
      <p>Site temel işlevsellik ve güvenlik için tarayıcı teknolojileri kullanabilir. Üçüncü taraf sitelere veya dosya paylaşım servislerine ait bağlantılar kendi politikalarına tabidir. Hizmetimiz çocuklara yönelik değildir; geçerli hukukta gerekli yaşın altındaysanız veli/yasal temsilci izni olmadan bilgi göndermeyin.</p>
    </Section>
    <Section title="8. Değişiklikler ve iletişim">
      <p>Bu politikayı mevzuat veya hizmetlerimizdeki değişikliklere göre güncelleyebiliriz. Güncel sürüm bu sayfada yayımlanır. Gizlilik talepleri için WhatsApp: +359 87 817 7666.</p>
    </Section>
  </>
);

const TermsContent = () => (
  <>
    <Section title="1. Kabul ve hizmetin niteliği">
      <p>Bu siteyi veya hizmetleri kullanarak bu Kullanım Koşullarını kabul edersiniz. STUDY HUB .SOFIA; proje danışmanlığı, teknik çizim desteği, biçimlendirme, görsel sunum ve öğrenme desteği sunar. Hizmetler, öğrencinin kendi öğrenmesine ve kendi çalışmasına yardımcı olmak içindir; not, kabul, sonuç, başarı veya belirli bir teslim tarihi garantisi verilmez.</p>
    </Section>
    <Section title="2. Akademik dürüstlük">
      <p>Sınav, değerlendirme veya akademik dürüstlük kurallarını ihlal eden çalışma yapmayız. Kullanıcı, teslim ettiği herhangi bir çalışmanın kendi sorumluluğunda olduğunu; kurumunun atıf, yapay zekâ, iş birliği ve dış destek kurallarına uyacağını kabul eder. Sağlanan materyalleri kendi çalışmanızmış gibi sunmak veya kurum kurallarını ihlal edecek şekilde kullanmak yasaktır.</p>
    </Section>
    <Section title="3. Talepler, fiyatlar ve ödemeler">
      <p>Bir talep, otomatik kabul veya bağlayıcı teklif anlamına gelmez. Kapsam, teslimat, revizyon, fiyat ve ödeme koşulları yazılı olarak teyit edildiğinde geçerlidir. Açıkça aksi kararlaştırılmadıkça ücretler vergi, üçüncü taraf lisansı, baskı, kurye ve benzeri dış masrafları içermez. Başlamış veya teslim edilmiş çalışma için, uygulanabilir hukuka tabi olmak üzere, iade yapılması zorunlu olmayabilir.</p>
    </Section>
    <Section title="4. Kullanıcının yükümlülükleri">
      <p>Doğru, güncel ve yeterli bilgi sağlamak; gerekli dosya, izin ve geri bildirimleri zamanında iletmek sizin sorumluluğunuzdadır. Virüs, zararlı yazılım, hukuka aykırı, hak ihlal eden, ayrımcı veya gizli üçüncü taraf içeriği yüklemeyin. Gecikmiş veya eksik bilgi nedeniyle oluşan gecikme, hata ya da ek maliyetten sorumlu değiliz.</p>
    </Section>
    <Section title="5. Fikri mülkiyet ve kullanım lisansı">
      <p>Site tasarımı, marka, metin, görsel, şablon, yöntem ve diğer içerikler bize veya lisans verenlere aittir ve korunur. Yazılı izin olmadan kopyalayamaz, yeniden yayımlayamaz, tersine mühendislik yapamaz veya ticari olarak kullanamazsınız. Size teslim edilen çalışma için kullanım kapsamı teklif/teslimat koşullarında belirtilir; kaynak dosyalar, üçüncü taraf lisansları ve önceden var olan materyaller ayrı koşullara tabi olabilir.</p>
    </Section>
    <Section title="6. Revizyon, teslimat ve sorumluluğun sınırı">
      <p>Revizyonlar, teyit edilmiş kapsam içinde ve belirtilen sürelerde değerlendirilir; kapsam değişiklikleri ek ücret ve süre gerektirebilir. Dosyaları teslimden sonra gecikmeden kontrol etmelisiniz. Hizmetler "olduğu gibi" ve erişilebilirlik durumuna göre sunulur. Kanunun izin verdiği en geniş ölçüde dolaylı zararlar, veri kaybı, itibar kaybı, kaçırılmış fırsat, kurum kararı veya üçüncü taraf eylemlerinden sorumlu değiliz. Zorunlu hukuk aksini gerektirmedikçe toplam sorumluluğumuz, ilgili hizmet için tarafımıza fiilen ödenen tutarla sınırlıdır.</p>
    </Section>
    <Section title="7. Tazmin, askıya alma ve fesih">
      <p>Koşulları ihlal etmeniz, hukuka aykırı kullanımınız veya sağladığınız içeriğin üçüncü taraf haklarını ihlal etmesi nedeniyle doğan makul talep, zarar ve masraflar karşısında bizi tazmin etmeyi kabul edersiniz. Güvenlik, hukuk veya akademik dürüstlük riski gördüğümüzde hizmeti reddedebilir, askıya alabilir veya sona erdirebiliriz.</p>
    </Section>
    <Section title="8. Uygulanacak hukuk ve iletişim">
      <p>Emredici tüketici koruması kuralları saklı kalmak üzere, bu koşullar Bulgaristan hukukuna tabidir; uyuşmazlıklar Sofya’daki yetkili mahkemelerde çözülür. Bu koşullardan herhangi birinin geçersiz olması diğer hükümleri etkilemez. Sorular için WhatsApp: +359 87 817 7666.</p>
    </Section>
  </>
);
