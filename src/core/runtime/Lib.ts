import { NUMBERType } from ".";
import { ResultType } from "../interpreter/Interpreter";
import {
    acos,
    acosd,
    acosh,
    acot,
    acotd,
    acoth,
    acsc,
    acscd,
    acsch,
    asec,
    asecd,
    asech,
    asin,
    asind,
    asinh,
    atan,
    atan2,
    atan2d,
    atand,
    atanh,
    cat,
    ceil,
    cos,
    cosd,
    cosh,
    cospi,
    cot,
    cotd,
    coth,
    cross,
    csc,
    cscd,
    csch,
    cumprod,
    cumsum,
    diag,
    dot,
    exp,
    eye,
    floor,
    horzcat,
    iscolumn,
    isempty,
    ismatrix,
    isrow,
    isscalar,
    issorted,
    issortedrows,
    isvector,
    length,
    linspace,
    log,
    log10,
    log2,
    logspace,
    meshgrid,
    ndims,
    normalize,
    numel,
    ones,
    pow2,
    rand,
    sec,
    secd,
    sech,
    sin,
    sind,
    sinh,
    sinpi,
    size, sqrt,
    tan,
    tand,
    tanh,
    transpose,
    vertcat,
    zeros
} from "./Math";
import RunTime from "./Runtime";
import { ARRAY, DATAType, Type } from "./Type";

export const StandardLibrary: any = {
    ceil: {
        name: 'ceil',
        autoComplete: 'ceil(x)',
        call: (argv: any[]) => {
            return callFunction(argv, ceil);
        }
    },
    floor: {
        name: 'floor',
        autoComplete: 'floor(x)',
        call: (argv: any[]) => {
            return callFunction(argv, floor);
        }
    },
    rand: {
        name: 'rand',
        autoComplete: 'rand()',
        call: (argv: any[]) => {

            if (argv.length === 1) {
                return rand(argv[0].value);
            }
            return rand();
        }
    },
    cumsum: {
        name: 'cumsum',
        autoComplete: 'cumsum()',
        call: (argv: any[]) => {
            return cumsum(argv[0]);
        }
    },
    cumprod: {
        name: 'cumprod',
        autoComplete: 'cumprod()',
        call: (argv: any[]) => {
            return cumprod(argv[0]);
        }
    },
    pow2: {
        name: 'pow2',
        autoComplete: 'pow2(x)',
        call: (argv: any[]) => {
            return pow2(argv[0].value, argv.length > 1 ? argv[1].value : 2);
        }
    },
    exp: {
        name: 'exp',
        autoComplete: 'exp(x)',
        call: (argv: any[]) => {
            return callFunction(argv, exp);
        }
    },
    log: {
        name: 'log',
        autoComplete: 'log(x)',
        call: (argv: any[]) => {
            return callFunction(argv, log);
        }
    },
    log10: {
        name: 'log10',
        autoComplete: 'log10(x)',
        call: (argv: any[]) => {
            return callFunction(argv, log10);
        }
    },
    log2: {
        name: 'log2',
        autoComplete: 'log2(x)',
        call: (argv: any[]) => {
            return callFunction(argv, log2);
        }
    },
    sqrt: {
        name: 'sqrt',
        autoComplete: 'sqrt(x)',
        call: (argv: any[]) => {
            return callFunction(argv, sqrt);
        }
    },
    sin: {
        name: 'sin',
        autoComplete: 'sin(x)',
        call: (argv: any[]) => {
            return callFunction(argv, sin);
        }
    },
    sind: {
        name: 'sind',
        autoComplete: 'sind(x)',
        call: (argv: any[]) => {
            return callFunction(argv, sind);
        }
    },
    sinpi: {
        name: 'sinpi',
        autoComplete: 'sinpi(x)',
        call: (argv: any[]) => {
            return callFunction(argv, sinpi);
        }
    },
    asin: {
        name: 'asin',
        autoComplete: 'asin(x)',
        call: (argv: any[]) => {
            return callFunction(argv, asin);
        }
    },
    asind: {
        name: 'asind',
        autoComplete: 'asind(x)',
        call: (argv: any[]) => {
            return callFunction(argv, asind);
        }
    },
    sinh: {
        name: 'sinh',
        autoComplete: 'sinh(x)',
        call: (argv: any[]) => {
            return callFunction(argv, sinh);
        }
    },
    asinh: {
        name: 'asinh',
        autoComplete: 'asinh(x)',
        call: (argv: any[]) => {
            return callFunction(argv, asinh);
        }
    },
    cos: {
        name: 'cos',
        autoComplete: 'cos(x)',
        call: (argv: any[]) => {
            return callFunction(argv, cos);
        }
    },
    cosd: {
        name: 'cosd',
        autoComplete: 'cosd(x)',
        call: (argv: any[]) => {
            return callFunction(argv, cosd);
        }
    },
    cospi: {
        name: 'cospi',
        autoComplete: 'cospi(x)',
        call: (argv: any[]) => {
            return callFunction(argv, cospi);
        }
    },
    acos: {
        name: 'acos',
        autoComplete: 'acos(x)',
        call: (argv: any[]) => {
            return callFunction(argv, acos);
        }
    },
    acosd: {
        name: 'acosd',
        autoComplete: 'acosd(x)',
        call: (argv: any[]) => {
            return callFunction(argv, acosd);
        }
    },
    cosh: {
        name: 'cosh',
        autoComplete: 'cosh(x)',
        call: (argv: any[]) => {
            return callFunction(argv, cosh);
        }
    },
    acosh: {
        name: 'acosh',
        autoComplete: 'acosh(x)',
        call: (argv: any[]) => {
            return callFunction(argv, acosh);
        }
    },
    tan: {
        name: 'tan',
        autoComplete: 'tan(x)',
        call: (argv: any[]) => {
            return callFunction(argv, tan);
        }
    },
    tand: {
        name: 'tand',
        autoComplete: 'tand(x)',
        call: (argv: any[]) => {
            return callFunction(argv, tand);
        }
    },
    atan: {
        name: 'atan',
        autoComplete: 'atan(x)',
        call: (argv: any[]) => {
            return callFunction(argv, atan);
        }
    },
    atand: {
        name: 'atand',
        autoComplete: 'atand(x)',
        call: (argv: any[]) => {
            return callFunction(argv, atand);
        }
    },
    atan2: {
        name: 'atan2',
        autoComplete: 'atan2(x)',
        call: (argv: any[]) => {
            return callFunction(argv, atan2);
        }
    },
    atan2d: {
        name: 'atan2d',
        autoComplete: 'atan2d(x)',
        call: (argv: any[]) => {
            return callFunction(argv, atan2d);
        }
    },
    tanh: {
        name: 'tanh',
        autoComplete: 'tanh(x)',
        call: (argv: any[]) => {
            return callFunction(argv, tanh);
        }
    },
    atanh: {
        name: 'atanh',
        autoComplete: 'atanh(x)',
        call: (argv: any[]) => {
            return callFunction(argv, atanh);
        }
    },

    csc: {
        name: 'csc',
        autoComplete: 'csc(x)',
        call: (argv: any[]) => {
            return callFunction(argv, csc);
        }
    },
    cscd: {
        name: 'cscd',
        autoComplete: 'cscd(x)',
        call: (argv: any[]) => {
            return callFunction(argv, cscd);
        }
    },
    acsc: {
        name: 'acsc',
        autoComplete: 'acsc(x)',
        call: (argv: any[]) => {
            return callFunction(argv, acsc);
        }
    },
    acscd: {
        name: 'acscd',
        autoComplete: 'acscd(x)',
        call: (argv: any[]) => {
            return callFunction(argv, acscd);
        }
    },
    csch: {
        name: 'csch',
        autoComplete: 'csch(x)',
        call: (argv: any[]) => {
            return callFunction(argv, csch);
        }
    },
    acsch: {
        name: 'acsch',
        autoComplete: 'acsch(x)',
        call: (argv: any[]) => {
            return callFunction(argv, acsch);
        }
    },
    sec: {
        name: 'sec',
        autoComplete: 'sec(x)',
        call: (argv: any[]) => {
            return callFunction(argv, sec);
        }
    },
    secd: {
        name: 'secd',
        autoComplete: 'secd(x)',
        call: (argv: any[]) => {
            return callFunction(argv, secd);
        }
    },
    asec: {
        name: 'asec',
        autoComplete: 'asec(x)',
        call: (argv: any[]) => {
            return callFunction(argv, asec);
        }
    },
    asecd: {
        name: 'asecd',
        autoComplete: 'asecd(x)',
        call: (argv: any[]) => {
            return callFunction(argv, asecd);
        }
    },
    sech: {
        name: 'sech',
        autoComplete: 'sech(x)',
        call: (argv: any[]) => {
            return callFunction(argv, sech);
        }
    },
    asech: {
        name: 'asech',
        autoComplete: 'asech(x)',
        call: (argv: any[]) => {
            return callFunction(argv, asech);
        }
    },
    cot: {
        name: 'cot',
        autoComplete: 'cot(x)',
        call: (argv: any[]) => {
            return callFunction(argv, cot);
        }
    },
    cotd: {
        name: 'cotd',
        autoComplete: 'cotd(x)',
        call: (argv: any[]) => {
            return callFunction(argv, cotd);
        }
    },
    acot: {
        name: 'acot',
        autoComplete: 'acot(x)',
        call: (argv: any[]) => {
            return callFunction(argv, acot);
        }
    },
    acotd: {
        name: 'acotd',
        autoComplete: 'acotd(x)',
        call: (argv: any[]) => {
            return callFunction(argv, acotd);
        }
    },
    coth: {
        name: 'coth',
        autoComplete: 'coth(x)',
        call: (argv: any[]) => {
            return callFunction(argv, coth);
        }
    },
    acoth: {
        name: 'acoth',
        autoComplete: 'acoth(x)',
        call: (argv: any[]) => {
            return callFunction(argv, acoth);
        }
    },
    zeros: {
        name: 'zeros',
        autoComplete: 'zeros(x,y,z...)',
        call: (argv: any[]) => {
            if (argv.length === 1) {
                argv.push(argv[0]);
                return zeros(argv.map((item: any) => item.value));
            }
            return zeros(argv.map((item: any) => item.value))
        },
    },
    ones: {
        name: 'ones',
        autoComplete: 'ones(x,y,z)',
        call: (argv: any[]) => {
            if (argv.length === 1) {
                argv.push(argv[0]);
                return ones(argv.map((item: any) => item.value));
            }
            return ones(argv.map((item: any) => item.value))
        },
    },
    eye: {
        name: 'eye',
        autoComplete: 'eye(x,y,z)',
        call: (argv: any[]) => {
            return eye(argv.map((item: any) => item.value))
        },
    },
    diag: {
        name: 'diag',
        autoComplete: 'diag(v)',
        call: (argv: any[]) => {
            return diag(argv[0].value)
        },
    },
    linspace: {
        name: 'linspace',
        autoComplete: 'linspace(x1,x2,n)',
        call: (argv: any[]) => {
            return linspace(argv[0].value, argv[1].value, argv.length === 3 ? argv[2].value : 100)
        },
    },
    logspace: {
        name: 'logspace',
        autoComplete: 'logspace(x1,x2,n)',
        call: (argv: any[]) => {
            return logspace(argv[0].value, argv[1].value, argv.length === 3 ? argv[2].value : 100)
        },
    },
    meshgrid: {
        name: 'meshgrid',
        autoComplete: 'meshgrid(x,y,z)',
        call: (argv: any[]) => {
            if (argv.length === 1) {
                return meshgrid(argv[0].value, argv[0].value)
            }
            return meshgrid(argv[0].value, argv[1].value)
        },
    },
    length: {
        name: 'length',
        autoComplete: 'length(A)',
        call: (argv: any[]) => {
            return length(argv[0])
        },
    },
    size: {
        name: 'size',
        autoComplete: 'size(A)',
        call: (argv: any[]) => {
            return size(argv[0])
        },
    },
    ndims: {
        name: 'ndims',
        autoComplete: 'ndims(A)',
        call: (argv: any[]) => {
            return ndims(argv[0])
        },
    },
    numel: {
        name: 'numel',
        autoComplete: 'numel(A)',
        call: (argv: any[]) => {
            return numel(argv[0])
        },
    },
    isscalar: {
        name: 'isscalar',
        autoComplete: 'isscalar(A)',
        call: (argv: any[]) => {
            return isscalar(argv[0])
        },
    },
    issorted: {
        name: 'issorted',
        autoComplete: 'issorted(A)',
        call: (argv: any[]) => {
            return issorted(argv[0])
        },
    },
    issortedrows: {
        name: 'issortedrows',
        autoComplete: 'issortedrows(A)',
        call: (argv: any[]) => {
            return issortedrows(argv[0])
        },
    },
    isvector: {
        name: 'isvector',
        autoComplete: 'isvector(A)',
        call: (argv: any[]) => {
            return isvector(argv[0])
        },
    },
    ismatrix: {
        name: 'ismatrix',
        autoComplete: 'ismatrix(A)',
        call: (argv: any[]) => {
            return ismatrix(argv[0])
        },
    },
    isrow: {
        name: 'isrow',
        autoComplete: 'isrow(A)',
        call: (argv: any[]) => {
            return isrow(argv[0])
        },
    },
    iscolumn: {
        name: 'iscolumn',
        autoComplete: 'iscolumn(A)',
        call: (argv: any[]) => {
            return iscolumn(argv[0])
        },
    },
    isempty: {
        name: 'isempty',
        autoComplete: 'isempty(A)',
        call: (argv: any[]) => {
            return isempty(argv[0])
        },
    },
    cat: {
        name: 'cat',
        autoComplete: 'cat(dim,A,B)',
        call: (argv: any[]) => {
            if (argv.length === 3 && argv[1].type === Type.ARRAY && argv[2].type === Type.ARRAY) {
                return cat(argv[0], argv[1], argv[2]);
            }
            throw new Error("cat 参数个数不对，用法cat(dim,A,B)");
        },
    },
    horzcat: {
        name: 'horzcat',
        autoComplete: 'horzcat(A,B)',
        call: (argv: any[]) => {
            if (argv.length === 2 && argv[0].type === Type.ARRAY && argv[1].type === Type.ARRAY) {
                return horzcat(argv[0], argv[1]);
            }
            throw new Error("horzcat horzcat(A,B)");
        },
    },
    vertcat: {
        name: 'vertcat',
        autoComplete: 'vertcat(A,B)',
        call: (argv: any[]) => {
            if (argv.length === 2 && argv[0].type === Type.ARRAY && argv[1].type === Type.ARRAY) {
                return vertcat(argv[0], argv[1]);
            }
            throw new Error("vertcat 参数个数不对，用法vertcat(A,B)");
        },
    },
    transpose: {
        name: 'transpose',
        autoComplete: 'transpose(A)',
        call: (argv: any[]) => {
            return transpose(argv[0])
        },
    },
    dot: {
        name: 'dot',
        autoComplete: 'dot(A,B)',
        call: (argv: any[]) => {
            return dot(argv[0], argv[1])
        },
    },
    cross: {
        name: 'cross',
        autoComplete: 'cross(A,B)',
        call: (argv: any[]) => {
            return cross(argv[0], argv[1])
        },
    },
    normalize: {
        name: 'normalize',
        autoComplete: 'normalize(A)',
        call: (argv: any[]) => {
            return normalize(argv[0])
        },
    },

    plot: {
        name: 'plot',
        autoComplete: 'plot(x,y)',
        call: (argv: any[], runtime: RunTime) => {

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: 'plot',
                value: {
                    data: [...argv],
                    config: {
                        name: 'plot',
                        type: '2d'
                    }
                }
            });

            return undefined;
        }
    },
    scatter: {
        name: 'scatter',
        autoComplete: 'scatter(x,y)',
        call: (argv: any[], runtime: RunTime) => {

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: 'scatter',
                value: {
                    data: [...argv],
                    config: {
                        name: 'scatter',
                        type: '2d'
                    }
                }
            });

            return undefined;
        }
    },
    bubblechart: {
        name: 'bubblechart',
        autoComplete: 'bubblechart(x,y,sz)',
        call: (argv: any[], runtime: RunTime) => {

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: 'bubblechart',
                value: {
                    data: [...argv],
                    config: {
                        name: 'bubblechart',
                        type: '2d'
                    }
                }
            });


            return undefined;
        }
    },
    histogram: {
        name: 'histogram',
        autoComplete: 'histogram(x)',
        call: (argv: any[], runtime: RunTime) => {

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: 'histogram',
                value: {
                    data: [...argv],
                    config: {
                        name: 'histogram',
                        type: '2d'
                    }
                }
            });


            return undefined;
        }
    },
    area: {
        name: 'area',
        autoComplete: 'area(x,y)',
        call: (argv: any[], runtime: RunTime) => {

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: 'area',
                value: {
                    data: [...argv],
                    config: {
                        name: 'area',
                        type: '2d'
                    }
                }
            });


            return undefined;
        }
    },
    plot3: {
        name: 'plot3',
        autoComplete: 'plot3(x,y,z)',
        call: (argv: any[], runtime: RunTime) => {

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: 'plot3',
                value: {
                    data: [...argv],
                    config: {
                        name: 'plot3',
                        type: '3d'
                    }
                }
            });


            return undefined;
        }
    },
    scatter3: {
        name: 'scatter3',
        autoComplete: 'scatter3(x,y,z)',
        call: (argv: any[], runtime: RunTime) => {

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: 'scatter3',
                value: {
                    data: [...argv],
                    config: {
                        name: 'scatter3',
                        type: '3d'
                    }
                }
            });

            return undefined;
        }
    },
    mesh: {
        name: 'mesh',
        autoComplete: 'mesh(x,y,z)',
        call: (argv: any[], runtime: RunTime) => {

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: 'mesh',
                value: {
                    data: [...argv],
                    config: {
                        name: 'mesh',
                        type: '3d'
                    }
                }
            });

            return undefined;
        }
    },
    surf: {
        name: 'surf',
        autoComplete: 'surf(x,y,z)',
        call: (argv: any[], runtime: RunTime) => {

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: 'surf',
                value: {
                    data: [...argv],
                    config: {
                        name: 'surf',
                        type: '3d'
                    }
                }
            });

            return undefined;
        }
    },

    figure: {
        name: 'figure',
        autoComplete: 'figure(x)',
        call: (argv: any[], runtime: RunTime) => {

            runtime.switchFigure(argv[0].value);

            return undefined;
        }
    },
    title: {
        name: 'title',
        autoComplete: 'title(txt)',
        call: (argv: any[], runtime: RunTime) => {

            const figure = runtime.getCurrentFigure();

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: figure.name,
                value: {
                    data: figure.value.data,
                    config: {
                        title: argv[0].value
                    }
                }
            });

            return undefined;
        }
    },
    legend: {
        name: 'legend',
        autoComplete: 'legend(txt)',
        call: (argv: any[], runtime: RunTime) => {

            const figure = runtime.getCurrentFigure();

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: figure.name,
                value: {
                    data: figure.value.data,
                    config: {
                        legend: argv.map((item: any) => item.value)
                    }
                }
            });

            return undefined;
        }
    },
    xlabel: {
        name: 'xlabel',
        autoComplete: 'xlabel(txt)',
        call: (argv: any[], runtime: RunTime) => {

            const figure = runtime.getCurrentFigure();

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: figure.name,
                value: {
                    data: figure.value.data,
                    config: {
                        xlabel: argv[0].value
                    }
                }
            });

            return undefined;
        }
    },
    ylabel: {
        name: 'ylabel',
        autoComplete: 'ylabel(txt)',
        call: (argv: any[], runtime: RunTime) => {

            const figure = runtime.getCurrentFigure();

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: figure.name,
                value: {
                    data: figure.value.data,
                    config: {
                        ylabel: argv[0].value
                    }
                }
            });

            return undefined;
        }
    },
    zlabel: {
        name: 'zlabel',
        autoComplete: 'zlabel(txt)',
        call: (argv: any[], runtime: RunTime) => {

            const figure = runtime.getCurrentFigure();

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: figure.name,
                value: {
                    data: figure.value.data,
                    config: {
                        zlabel: argv[0].value
                    }
                }
            });

            return undefined;
        }
    },
    colormap: {
        name: 'colormap',
        autoComplete: 'colormap(map)',
        call: (argv: any[], runtime: RunTime) => {

            const figure = runtime.getCurrentFigure();

            if ((argv[0] as ARRAY).dim.length === 2 && (argv[0] as ARRAY).dim[1] === 3) {
                runtime.updateFigure({
                    type: ResultType.PLOT,
                    name: figure.name,
                    value: {
                        data: figure.value.data,
                        config: {
                            colormap: argv[0]
                        }
                    }
                });

                return undefined;
            }

            throw new Error('必须为n*3的矩阵!');
        }
    },
    subplot: {
        name: 'subplot',
        autoComplete: 'subplot(m,n,p)',
        call: (argv: any[], runtime: RunTime) => {

            const figure = runtime.getCurrentFigure();

            runtime.updateFigure({
                type: ResultType.PLOT,
                name: figure.name,
                value: {
                    data: figure.value.data,
                    config: {
                        subplot: argv.map((item: any) => item.value)
                    }
                }
            });

            return undefined;
        }
    },
}

const callFunction = (argv: any, callBack: any) => {
    if (argv.length === 0) {
        return {
            type: Type.DOUBLE,
            value: callBack()
        }
    }

    if ((argv[0] as DATAType).type === Type.DOUBLE) {
        return {
            type: Type.DOUBLE,
            value: callBack((argv[0] as NUMBERType).value)
        }
    }

    return {
        type: Type.ARRAY,
        elementType: Type.DOUBLE,
        dim: (argv[0] as ARRAY).dim,
        value: (argv[0] as ARRAY).value.map((item: number) => {
            return callBack(item)
        })
    }
}

