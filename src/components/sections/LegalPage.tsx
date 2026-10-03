import React from 'react';
import { ArrowLeft, Scale, ShieldCheck } from 'lucide-react';
import type { Language } from '../../config/translations';

type LegalPageKind = 'privacy' | 'terms';

interface LegalPageProps {
  kind: LegalPageKind;
  currentLang: Language;
}

type LocalizedSection = { title: string; paragraphs: string[]; bullets?: string[] };
type PrivacyCopy = { title: string; back: string; updated: string; sections: LocalizedSection[] };

const privacyCopy: Record<Language, PrivacyCopy> = {
  en: {
    title: 'Privacy Policy', back: 'Back to home', updated: 'Last updated: 3 October 2026',
    sections: [
      { title: '1. Scope and data controller', paragraphs: ['This policy covers the STUDY HUB .SOFIA website, inquiry forms and communications through WhatsApp. Our services are provided from Sofia, Bulgaria, and personal data is processed in accordance with the EU General Data Protection Regulation (GDPR) and applicable Bulgarian law.', 'It explains what information we collect, why we collect it, how we use it and your rights. By using the site, you acknowledge that you have read this policy.'] },
      { title: '2. Information we collect', paragraphs: ['Please do not send unnecessary sensitive data, identity documents, payment-card data, health information or confidential information belonging to others. You confirm that you have the permissions needed to share submitted content.'], bullets: ['Name, email address, telephone/WhatsApp number and preferred contact channel.', 'University, department, project requirements, deadline, budget range, messages and files you submit.', 'Device, browser, IP address, date/time and basic usage logs where required for security, debugging or service improvement.'] },
      { title: '3. Purposes and legal bases', paragraphs: ['We use data to assess requests, communicate with you, prepare offers, provide services, manage project requirements, protect security, meet legal obligations and resolve disputes. Our legal bases are pre-contractual steps or performance of a contract, legitimate interests, legal obligations and, where required, your consent.'] },
      { title: '4. Sharing, WhatsApp and international transfers', paragraphs: ['We do not sell, rent or disclose data to third parties for advertising. Data may be shared only as necessary with hosting, security, form, file-sharing or communications providers subject to confidentiality and security duties. When you communicate through WhatsApp, Meta/WhatsApp’s own privacy terms also apply and data may be transferred outside the EEA.'] },
      { title: '5. Retention and security', paragraphs: ['We retain inquiry and project records for as long as needed to provide services and handle potential legal claims, then delete or anonymise unnecessary data unless law requires a longer period. We use reasonable technical and organisational safeguards, but no internet transmission can be guaranteed completely secure.'] },
      { title: '6. Your rights', paragraphs: ['Under the GDPR, you may have rights of access, correction, erasure, restriction, objection, portability and withdrawal of consent. Send a request through our WhatsApp number; we may request reasonable information to verify identity. You may also complain to the competent data-protection authority in your country of residence.'] },
      { title: '7. Cookies, third-party links and children', paragraphs: ['The site may use browser technologies necessary for core functionality and security. Links to third-party sites or file-sharing services are governed by their own policies. Our services are not directed at children; do not submit information without a parent or legal guardian’s permission if you are below the age required by applicable law.'] },
      { title: '8. Changes and contact', paragraphs: ['We may update this policy when laws or our services change. The current version is published on this page. For privacy requests, contact us on WhatsApp: +359 87 817 7666.'] },
    ],
  },
  bg: {
    title: 'Политика за поверителност', back: 'Към началната страница', updated: 'Последна актуализация: 3 октомври 2026 г.',
    sections: [
      { title: '1. Обхват и администратор на данни', paragraphs: ['Тази политика обхваща уебсайта STUDY HUB .SOFIA, формулярите за запитване и комуникацията чрез WhatsApp. Услугите се предоставят от София, България, а личните данни се обработват съгласно GDPR и приложимото българско законодателство.', 'Тя обяснява каква информация събираме, защо и как я използваме, както и вашите права. С използването на сайта потвърждавате, че сте я прочели.'] },
      { title: '2. Информация, която събираме', paragraphs: ['Не изпращайте ненужни чувствителни данни, документи за самоличност, данни за карти, здравни данни или чужда поверителна информация. Потвърждавате, че имате необходимите разрешения за изпратеното съдържание.'], bullets: ['Име, имейл адрес, телефон/WhatsApp номер и предпочитан канал за контакт.', 'Университет, специалност, изисквания за проекта, срок, бюджет, съобщения и файлове.', 'Данни за устройство, браузър, IP адрес, дата/час и основни регистрационни записи, когато са нужни за сигурност, диагностика или подобряване на услугата.'] },
      { title: '3. Цели и правни основания', paragraphs: ['Използваме данните за оценка на запитвания, комуникация, оферти, предоставяне на услуги, управление на проектни изисквания, сигурност, законови задължения и спорове. Основанията са преддоговорни действия или изпълнение на договор, легитимен интерес, законово задължение и, при необходимост, съгласие.'] },
      { title: '4. Споделяне, WhatsApp и международни трансфери', paragraphs: ['Не продаваме, не отдаваме под наем и не разкриваме данни за реклама. Данни могат да се споделят само при необходимост с доставчици на хостинг, сигурност, формуляри, файлове или комуникации при задължения за поверителност. При комуникация чрез WhatsApp важат и условията на Meta/WhatsApp и данни могат да бъдат прехвърляни извън ЕИП.'] },
      { title: '5. Съхранение и сигурност', paragraphs: ['Съхраняваме записи за запитвания и проекти толкова, колкото е нужно за услугите и евентуални правни претенции, след което изтриваме или анонимизираме ненужните данни, освен ако законът изисква по-дълъг срок. Прилагаме разумни технически и организационни мерки, но никое предаване по интернет не е напълно сигурно.'] },
      { title: '6. Вашите права', paragraphs: ['Съгласно GDPR може да имате право на достъп, коригиране, изтриване, ограничаване, възражение, преносимост и оттегляне на съгласие. Изпратете искане чрез нашия WhatsApp номер; може да поискаме разумна информация за потвърждаване на самоличността. Можете и да подадете жалба до компетентния орган за защита на данните.'] },
      { title: '7. Бисквитки, външни връзки и деца', paragraphs: ['Сайтът може да използва технологии на браузъра за основна функционалност и сигурност. Връзките към външни сайтове или услуги за файлове са предмет на техните политики. Услугите ни не са насочени към деца; не изпращайте информация без разрешение от родител или законен настойник, ако сте под изискуемата възраст.'] },
      { title: '8. Промени и контакт', paragraphs: ['Можем да актуализираме тази политика при промяна в закона или услугите. Текущата версия е публикувана тук. За искания относно поверителността: WhatsApp +359 87 817 7666.'] },
    ],
  },
  tr: {
    title: 'Gizlilik Politikası', back: 'Ana sayfaya dön', updated: 'Son güncelleme: 3 Ekim 2026',
    sections: [
      { title: '1. Kapsam ve veri sorumlusu', paragraphs: ['Bu politika, STUDY HUB .SOFIA web sitesini, talep formlarını ve WhatsApp iletişimlerini kapsar. Hizmetler Sofya, Bulgaristan’dan sunulur; kişisel veriler GDPR ve yürürlükteki Bulgaristan mevzuatına uygun işlenir.', 'Hangi bilgileri neden topladığımızı, nasıl kullandığımızı ve haklarınızı açıklar. Siteyi kullanarak bu politikayı okuduğunuzu kabul edersiniz.'] },
      { title: '2. Topladığımız bilgiler', paragraphs: ['Gereksiz hassas veri, kimlik belgesi, ödeme kartı bilgisi, sağlık verisi veya başkalarına ait gizli bilgi göndermeyin. Gönderdiğiniz içerik için gerekli izinlere sahip olduğunuzu beyan edersiniz.'], bullets: ['Ad, e-posta adresi, telefon/WhatsApp numarası ve tercih edilen iletişim kanalı.', 'Üniversite, bölüm, proje gereksinimleri, teslim tarihi, bütçe aralığı, mesajlar ve dosyalar.', 'Güvenlik, hata ayıklama veya hizmet iyileştirme için gerektiğinde cihaz, tarayıcı, IP, tarih-saat ve temel kullanım kayıtları.'] },
      { title: '3. İşleme amaçları ve hukuki dayanak', paragraphs: ['Verileri talebinizi değerlendirmek, iletişim kurmak, teklif ve hizmet sağlamak, proje gereksinimlerini yönetmek, güvenliği korumak, yasal yükümlülükleri yerine getirmek ve uyuşmazlıkları çözmek için kullanırız. Dayanaklarımız sözleşme öncesi talebiniz veya sözleşmenin ifası, meşru menfaat, yasal yükümlülük ve gerektiğinde rızanızdır.'] },
      { title: '4. Paylaşım, WhatsApp ve uluslararası aktarımlar', paragraphs: ['Verilerinizi satmayız, kiralamayız veya reklam için paylaşmayız. Veriler, yalnızca gerekli olduğu ölçüde ve gizlilik yükümlülükleri altında barındırma, güvenlik, form, dosya paylaşımı veya iletişim sağlayıcılarıyla paylaşılabilir. WhatsApp üzerinden iletişimde Meta/WhatsApp koşulları da geçerlidir ve veriler AEA dışına aktarılabilir.'] },
      { title: '5. Saklama süresi ve güvenlik', paragraphs: ['Talep ve proje kayıtlarını hizmeti sağlamak ve olası yasal talepleri yönetmek için gerekli süre boyunca tutar; sonrasında gereksiz verileri siler veya anonimleştiririz. Kanun daha uzun süre gerektirirse buna uyarız. Makul teknik ve organizasyonel önlemler uygularız; ancak internet aktarımı tamamen güvenli garanti edilemez.'] },
      { title: '6. Haklarınız', paragraphs: ['GDPR kapsamında erişim, düzeltme, silme, işlemeyi kısıtlama, itiraz, veri taşınabilirliği ve rızayı geri çekme haklarına sahip olabilirsiniz. Talebinizi WhatsApp numaramızdan iletebilirsiniz; kimlik doğrulamak için makul bilgi isteyebiliriz. Ayrıca yetkili veri koruma otoritesine şikâyet hakkınız vardır.'] },
      { title: '7. Çerezler, üçüncü taraf bağlantıları ve çocuklar', paragraphs: ['Site temel işlevsellik ve güvenlik için tarayıcı teknolojileri kullanabilir. Üçüncü taraf siteler ve dosya paylaşım hizmetleri kendi politikalarına tabidir. Hizmetlerimiz çocuklara yönelik değildir; gerekli yaşın altındaysanız veli/yasal temsilci izni olmadan bilgi göndermeyin.'] },
      { title: '8. Değişiklikler ve iletişim', paragraphs: ['Bu politikayı mevzuat veya hizmet değişiklikleriyle güncelleyebiliriz. Güncel sürüm burada yayımlanır. Gizlilik talepleri için WhatsApp: +359 87 817 7666.'] },
    ],
  },
  el: {
    title: 'Πολιτική Απορρήτου', back: 'Επιστροφή στην αρχική', updated: 'Τελευταία ενημέρωση: 3 Οκτωβρίου 2026',
    sections: [
      { title: '1. Πεδίο εφαρμογής και υπεύθυνος επεξεργασίας', paragraphs: ['Η παρούσα πολιτική καλύπτει τον ιστότοπο STUDY HUB .SOFIA, τις φόρμες αιτήματος και την επικοινωνία μέσω WhatsApp. Οι υπηρεσίες παρέχονται από τη Σόφια της Βουλγαρίας και τα προσωπικά δεδομένα επεξεργάζονται σύμφωνα με τον GDPR και την ισχύουσα βουλγαρική νομοθεσία.', 'Εξηγεί ποιες πληροφορίες συλλέγουμε, γιατί, πώς τις χρησιμοποιούμε και τα δικαιώματά σας. Με τη χρήση του ιστότοπου δηλώνετε ότι την έχετε διαβάσει.'] },
      { title: '2. Πληροφορίες που συλλέγουμε', paragraphs: ['Μην αποστέλλετε περιττά ευαίσθητα δεδομένα, έγγραφα ταυτότητας, στοιχεία καρτών, δεδομένα υγείας ή εμπιστευτικές πληροφορίες τρίτων. Επιβεβαιώνετε ότι διαθέτετε τις απαραίτητες άδειες για το περιεχόμενο που υποβάλλετε.'], bullets: ['Όνομα, διεύθυνση email, αριθμός τηλεφώνου/WhatsApp και προτιμώμενο κανάλι επικοινωνίας.', 'Πανεπιστήμιο, τμήμα, απαιτήσεις έργου, προθεσμία, προϋπολογισμός, μηνύματα και αρχεία.', 'Στοιχεία συσκευής, προγράμματος περιήγησης, IP, ημερομηνία/ώρα και βασικά αρχεία χρήσης όταν απαιτούνται για ασφάλεια, αποσφαλμάτωση ή βελτίωση υπηρεσίας.'] },
      { title: '3. Σκοποί και νομικές βάσεις', paragraphs: ['Χρησιμοποιούμε τα δεδομένα για αξιολόγηση αιτημάτων, επικοινωνία, προσφορές, παροχή υπηρεσιών, διαχείριση απαιτήσεων έργου, ασφάλεια, νομικές υποχρεώσεις και επίλυση διαφορών. Οι νομικές βάσεις είναι προσυμβατικά βήματα ή εκτέλεση σύμβασης, έννομο συμφέρον, νομική υποχρέωση και, όπου απαιτείται, συγκατάθεση.'] },
      { title: '4. Κοινοποίηση, WhatsApp και διεθνείς διαβιβάσεις', paragraphs: ['Δεν πωλούμε, ενοικιάζουμε ή κοινοποιούμε δεδομένα για διαφήμιση. Δεδομένα μπορεί να κοινοποιηθούν μόνο όσο χρειάζεται σε παρόχους φιλοξενίας, ασφάλειας, φορμών, αρχείων ή επικοινωνίας με υποχρεώσεις εμπιστευτικότητας. Όταν επικοινωνείτε μέσω WhatsApp, ισχύουν και οι όροι της Meta/WhatsApp και δεδομένα μπορεί να διαβιβαστούν εκτός ΕΟΧ.'] },
      { title: '5. Διατήρηση και ασφάλεια', paragraphs: ['Διατηρούμε αρχεία αιτημάτων και έργων για όσο χρειάζεται για τις υπηρεσίες και πιθανές νομικές αξιώσεις, και κατόπιν διαγράφουμε ή ανωνυμοποιούμε τα μη αναγκαία δεδομένα, εκτός αν ο νόμος απαιτεί περισσότερο. Εφαρμόζουμε εύλογα τεχνικά και οργανωτικά μέτρα, αλλά καμία μετάδοση στο διαδίκτυο δεν μπορεί να εγγυηθεί απόλυτη ασφάλεια.'] },
      { title: '6. Τα δικαιώματά σας', paragraphs: ['Σύμφωνα με τον GDPR ενδέχεται να έχετε δικαιώματα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού, εναντίωσης, φορητότητας και ανάκλησης συγκατάθεσης. Στείλτε αίτημα μέσω του αριθμού WhatsApp μας· μπορεί να ζητήσουμε εύλογες πληροφορίες επαλήθευσης ταυτότητας. Μπορείτε επίσης να υποβάλετε καταγγελία στην αρμόδια αρχή προστασίας δεδομένων.'] },
      { title: '7. Cookies, σύνδεσμοι τρίτων και παιδιά', paragraphs: ['Ο ιστότοπος μπορεί να χρησιμοποιεί τεχνολογίες προγράμματος περιήγησης για βασική λειτουργικότητα και ασφάλεια. Οι σύνδεσμοι προς τρίτους ή υπηρεσίες κοινής χρήσης αρχείων διέπονται από τις δικές τους πολιτικές. Οι υπηρεσίες μας δεν απευθύνονται σε παιδιά· μην υποβάλλετε πληροφορίες χωρίς άδεια γονέα ή νόμιμου κηδεμόνα, αν είστε κάτω από την απαιτούμενη ηλικία.'] },
      { title: '8. Αλλαγές και επικοινωνία', paragraphs: ['Μπορούμε να ενημερώνουμε την πολιτική όταν αλλάζει η νομοθεσία ή οι υπηρεσίες. Η τρέχουσα έκδοση δημοσιεύεται εδώ. Για αιτήματα απορρήτου: WhatsApp +359 87 817 7666.'] },
    ],
  },
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="space-y-3">
    <h2 className="text-lg sm:text-xl font-bold text-gray-950">{title}</h2>
    <div className="space-y-3 text-sm leading-7 text-gray-600">{children}</div>
  </section>
);

export const LegalPage: React.FC<LegalPageProps> = ({ kind, currentLang }) => {
  const isPrivacy = kind === 'privacy';
  const Icon = isPrivacy ? ShieldCheck : Scale;
  const copy = privacyCopy[currentLang];
  const title = isPrivacy ? copy.title : 'Kullanım Koşulları';

  return (
    <main className="flex-grow bg-[#F8F9FA] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> {isPrivacy ? copy.back : 'Ana sayfaya dön'}
        </a>

        <article className="mt-6 rounded-3xl bg-white border border-gray-200 shadow-sm overflow-hidden">
          <header className="p-7 sm:p-10 bg-[#0D0F13] text-white">
            <Icon className="w-8 h-8 text-brand-400 mb-5" />
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-brand-300">STUDY HUB .SOFIA</p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
            <p className="mt-4 text-sm text-gray-300">{isPrivacy ? copy.updated : 'Son güncelleme: 3 Ekim 2026'}</p>
          </header>

          <div className="p-7 sm:p-10 space-y-9">
            {isPrivacy ? <PrivacyContent sections={copy.sections} /> : <TermsContent />}
          </div>
        </article>
      </div>
    </main>
  );
};

const PrivacyContent: React.FC<{ sections: LocalizedSection[] }> = ({ sections }) => (
  <>
    {sections.map((section) => (
      <Section key={section.title} title={section.title}>
        {section.bullets && <ul className="list-disc pl-5 space-y-1">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </Section>
    ))}
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
