import path from 'node:path'
import { Configuration } from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

if (isDevelopment) {
  console.log('Development mode!')
} else if (isProduction) {
  console.log('Production mode!')
}

const config: Configuration = {
  'mode': isProduction ? 'production' : 'development',
  'entry': './src/index.tsx',
  'module': {
    'rules': [
      {
        'test': /.tsx?$/u,
        'use': 'ts-loader',
        'exclude': /node_modules/u,
      },
      {
        'test': /\.css$/u,
        'use': ['style-loader', 'css-loader'],
      },
    ],
  },
  'resolve': {
    'extensions': ['.tsx', '.ts', '.js'],
  },
  'output': {
    'filename': 'bundle.js',
    'path': path.resolve(__dirname, 'dist'),
  },
  'plugins': [
    new CopyWebpackPlugin({
      'patterns': [{ 'from': 'public' }],
    }),
  ],
}

export default config
