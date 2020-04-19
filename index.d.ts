import {Options} from 'del';
import {OutputPlugin, Plugin} from 'rollup';

interface BaseOptions {
  delOptions?: Options;
}

interface StaticDirOptions extends BaseOptions {
  dir: string | string[];
}

interface DynamicDirOptions extends BaseOptions {
  dir?: null;
}

export type CleanPluginOptions = StaticDirOptions | DynamicDirOptions;

export declare function cleanPlugin(opts?: StaticDirOptions): Plugin;
export declare function cleanPlugin(opts?: DynamicDirOptions): OutputPlugin;
