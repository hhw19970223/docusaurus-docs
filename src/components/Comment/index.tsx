import React, { forwardRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Giscus, { GiscusProps } from '@giscus/react';
import { useThemeConfig, useColorMode, ThemeConfig } from '@docusaurus/theme-common';
interface CustomThemeConfig extends ThemeConfig {
  giscus: GiscusProps & { darkTheme: string };
}

export const Comment = forwardRef<HTMLDivElement>((_props, ref) => {
  const { giscus } = useThemeConfig() as CustomThemeConfig;
  const { colorMode } = useColorMode();
  const { theme = 'light', darkTheme = 'dark_dimmed' } = giscus;
  const giscusTheme = colorMode === 'dark' ? darkTheme : theme;
  
  let lang = window.location.pathname.split('/')[1];

  if (lang !== 'zh') {
    lang = 'en'
  } else {
    lang = 'zh-CN'
  }

  return (
    <BrowserOnly fallback={<div>Loading Comments...</div>}>
      {() => (
        <div ref={ref} id="comment" style={{ paddingTop: 50 }}>
          <Giscus
            id="comments"
            mapping={ window.location.pathname }
            strict="1"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            lang={lang}
            loading="lazy"
            {...giscus}
            theme={giscusTheme}
          />
        </div>
      )}
    </BrowserOnly>
  );
})