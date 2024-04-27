// import ModernLayout from '@layouts/modern/layout';

// export default function DefaultLayout({
//   children,
//   params: { lang },
// }: {
//   children: React.ReactNode;
//   params: {
//     lang: string;
//   };
// }) {
//   return <ModernLayout lang={lang}>{children}</ModernLayout>;
// }

import AntiqueRefinedLayout from '@layouts/antique-refined/layout';

export default function DefaultLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return <AntiqueRefinedLayout lang={lang}>{children}</AntiqueRefinedLayout>;
}
