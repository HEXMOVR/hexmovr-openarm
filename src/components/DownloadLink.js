import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function DownloadLink({href, children}) {
  const url = useBaseUrl(href);
  return <a href={url}>{children}</a>;
}
