
const themes = {
  default: {
    name: 'default',
    type: 'dark',
    colors: {
      base01: '#2f2f4c',
      base02: '#26263d',
      primary: '#596fde',
      text01: '#F5F5F7',
      text02: 'rgba(245, 245, 247, 0.8)',
      text03: 'rgba(245, 245, 247, 0.6)',
      text04: 'rgba(245, 245, 247, 0.2)',
      heading: '#F5F5F7',
      shadow: 'rgba(0, 0, 0, 0.4)',
      search: '#F5F5F7'  
    }
  },
  glacier: {
    name: 'glacier',
    type: 'dark',
    colors: {
      base01: '#586284',
      base02: '#3a4466',
      primary: '#28a3d1',
      text01: '#F5F5F7',
      text02: 'rgba(245, 245, 247, 0.8)',
      text03: 'rgba(245, 245, 247, 0.6)',
      text04: 'rgba(245, 245, 247, 0.2)',
      heading: '#F5F5F7',
      shadow: '#3a4466',
      search: '#F5F5F7'  
    }
  },
  royal: {
    name: 'royal',
    type: 'dark',
    colors: {
      base01: '#2b2e64',
      base02: '#3d4287',
      primary: '#5F77EF',
      text01: '#F5F5F7',
      text02: 'rgba(245, 245, 247, 0.8)',
      text03: 'rgba(245, 245, 247, 0.6)',
      text04: 'rgba(245, 245, 247, 0.2)',
      heading: '#F5F5F7',
      shadow: 'rgba(0, 0, 0, 0.4)',
      search: '#F5F5F7'  
    }
  },
  gloom: {
    name: 'gloom',
    type: 'dark',
    colors: {
      base01: '#282c35',
      base02: '#191b20',
      primary: '#ffa7c4',
      text01: '#F5F5F7',
      text02: 'rgba(245, 245, 247, 0.8)',
      text03: 'rgba(245, 245, 247, 0.6)',
      text04: 'rgba(245, 245, 247, 0.2)',
      heading: '#ffa7c4',
      shadow: 'rgba(0, 0, 0, 0.4)',
      search: '#F5F5F7'  
    }
  },
  dark: {
    name: 'dark',
    type: 'dark',
    colors: {
      base01: '#000',
      base02: '#111111',
      primary: 'rgb(95, 119, 239)',
      text01: '#F5F5F7',
      text02: 'rgba(245, 245, 247, 0.8)',
      text03: 'rgba(245, 245, 247, 0.6)',
      text04: 'rgba(245, 245, 247, 0.2)',
      heading: 'rgb(95, 119, 239)',
      shadow: '#000',
      search: '#F5F5F7'
    }
  },
  gold: {
    name: 'gold',
    type: 'dark',
    colors: {
      base01: '#000',
      base02: '#111111',
      primary: 'rgb(235, 195, 38)',
      text01: '#F5F5F7',
      text02: 'rgba(245, 245, 247, 0.8)',
      text03: 'rgba(245, 245, 247, 0.6)',
      text04: 'rgba(245, 245, 247, 0.2)',
      heading: 'rgb(235, 195, 38)',
      shadow: '#000',
      search: '#F5F5F7'  
    }
  },
  lavender: {
    name: 'lavender',
    type: 'light',
    colors: {
      base01: '#ebf2fc',
      base02: '#f7f8fa',
      primary: '#7c73e2',
      text01: '#0c0c0c',
      text03: '#afb3c5',
      text04: '#adb5c4',
      heading: '#7c73e2',
      shadow: 'rgba(0, 0, 0, 0.2)',
      search: '#ffffff'  
    }
  },
  solarized: {
    name: 'solarized',
    type: 'light',
    colors: {
      base01: 'rgb(253, 246, 227)',
      base02: 'rgb(255, 252, 243)',
      primary: 'rgb(178, 138, 28)',
      text01: 'rgba(0, 0, 0, 0.8)',
      text02: 'rgba(0, 0, 0, 0.7)',
      text03: 'rgba(0, 0, 0, 0.6)',
      text04: 'rgba(0, 0, 0, 0.5)',
      heading: 'rgb(66, 85, 89)',
      shadow: 'rgba(0, 0, 0, 0.4)',
      search: '#f2f2f2'  
    }
  },
  newspaper: {
    name: 'newspaper',
    type: 'light',
    colors: {
      base01: '#fff',
      base02: '#eee',
      primary: '#03a87c',
      text01: 'rgba(0, 0, 0, 0.8)',
      text02: 'rgba(0, 0, 0, 0.6)',
      text03: 'rgba(0, 0, 0, 0.4)',
      text04: 'rgba(0, 0, 0, 0.2)',
      heading: '#03a87c',
      shadow: 'rgba(0, 0, 0, 0.4)',
      search: '#f2f2f2'  
    }
  },
  bloom: {
    name: 'bloom',
    type: 'light',
    colors: {
      base01: '#ffdbea',
      base02: '#ffc2db',
      primary: '#994265',
      text01: 'rgba(0, 0, 0, 0.6)',
      text02: 'rgba(0, 0, 0, 0.4)',
      text03: 'rgba(0, 0, 0, 0.3)',
      text04: 'rgba(0, 0, 0, 0.2)',
      heading: 'rgba(0, 0, 0, 0.8)',
      shadow: 'transparent',
      search: '#F5F5F7'
    }
  },
  blood: {
    name: 'blood',
    type: 'light',
    colors: {
      base01: '#f5f5f5',
      base02: '#ffffff',
      primary: '#bf0000',
      text01: '#0c0c0c',
      text03: '#afb3c5',
      text04: '#adb5c4',
      heading: '#bf0000',
      shadow: 'rgba(0, 0, 0, 0.4)',
      search: '#f5f5f5'  
    }
  },
  light: {
    name: 'light',
    type: 'light',
    colors: {
      base01: '#dcdcdc',
      base02: '#f2f2f2',
      primary: '#4d6185',
      text01: 'rgba(0, 0, 0, 0.8)',
      text02: 'rgba(0, 0, 0, 0.6)',
      text03: 'rgba(0, 0, 0, 0.4)',
      text04: 'rgba(0, 0, 0, 0.2)',
      heading: 'rgba(0, 0, 0, 0.8)',
      shadow: 'rgba(0, 0, 0, 0.4)',
      search: '#f2f2f2'  
    }
  }
}

const legacy_themes = {
  default00: {
    base01: '#2A2D41',
    base02: '#1C2033',
    primary: '#5F77EF',
    text01: '#F5F5F7',
    text03: 'rgba(245, 245, 247, 0.6)',
    text04: 'rgba(245, 245, 247, 0.2)',
    heading: '#F5F5F7',
    shadow: 'rgba(0, 0, 0, 0.4)',
    search: '#F5F5F7'
  },
  default04: {
    base01: '#26263d',
    base02: '#1c1e30',
    primary: '#5F77EF',
    text01: '#F5F5F7',
    text03: 'rgba(245, 245, 247, 0.6)',
    text04: 'rgba(245, 245, 247, 0.2)',
    heading: '#F5F5F7',
    shadow: 'rgba(0, 0, 0, 0.4)',
    search: '#F5F5F7'
  },
  default05: {
    base01: '#263051',
    base02: '#19233b',
    primary: '#7592f1',
    text01: '#F5F5F7',
    text03: 'rgba(245, 245, 247, 0.6)',
    text04: 'rgba(245, 245, 247, 0.2)',
    heading: '#F5F5F7',
    shadow: 'rgba(0, 0, 0, 0.4)',
    search: '#F5F5F7'
  },
};

export default themes;
