import namespace from '@rdfjs/namespace'

import {MappingTypes} from './mapping-types'

export const marcMappingPrefixes: {prefix: string, uri: string}[] = [
  {
    'prefix': 'bibo',
    'uri': 'http://purl.org/ontology/bibo/'
  },
  {
    'prefix': 'rdfs',
    'uri': 'http://www.w3.org/2000/01/rdf-schema#'
  },
  {
    'prefix': 'xfoaf',
    'uri': 'http://www.foafrealm.org/xfoaf/0.1/'
  },
  {
    'prefix': 'deich',
    'uri': 'http://data.deichman.no/'
  },
  {
    'prefix': 'rev',
    'uri': 'http://purl.org/stuff/rev#'
  },
  {
    'prefix': 'dbo',
    'uri': 'http://dbpedia.org/ontology/'
  },
  {
    'prefix': 'fabio',
    'uri': 'http://purl.org/spar/fabio/'
  },
  {
    'prefix': 'frbr',
    'uri': 'http://purl.org/vocab/frbr/core#'
  },
  {
    'prefix': 'rda',
    'uri': 'http://rdvocab.info/Elements/'
  },
  {
    'prefix': 'geonames',
    'uri': 'http://www.geonames.org/ontology#'
  },
  {
    'prefix': 'mo',
    'uri': 'http://purl.org/ontology/mo/'
  },
  {
    'prefix': 'yago',
    'uri': 'http://dbpedia.org/class/yago/'
  },
  {
    'prefix': 'ctag',
    'uri': 'http://commontag.org/ns#'
  },
  {
    'prefix': 'radatana',
    'uri': 'http://def.bibsys.no/xmlns/radatana/1.0#'
  },
  {
    'prefix': 'sioc',
    'uri': 'http://rdfs.org/sioc/ns#'
  },
  {
    'prefix': 'acc',
    'uri': 'http://purl.org/NET/acc#'
  },
  {
    'prefix': 'org',
    'uri': 'http://www.w3.org/ns/org#'
  },
  {
    'prefix': 'iface',
    'uri': 'http://www.multimedian.nl/projects/n9c/interface#'
  },
  {
    'prefix': 'skos',
    'uri': 'http://www.w3.org/2004/02/skos/core#'
  },
  {
    'prefix': 'owl',
    'uri': 'http://www.w3.org/2002/07/owl#'
  },
  {
    'prefix': 'foaf',
    'uri': 'http://xmlns.com/foaf/0.1/'
  },
  {
    'prefix': 'dc',
    'uri': 'http://purl.org/dc/terms/'
  },
  {
    'prefix': 'lvont',
    'uri': 'http://lexvo.org/ontology#'
  }
]

export const radatana = namespace('http://def.bibsys.no/xmlns/radatana/1.0#')
export const geonames = namespace('http://www.geonames.org/ontology#')
export const fabio = namespace('http://purl.org/spar/fabio/')

export const mappingSkeleton  = {
  'tags': {
    '100': {
      'subfield': {
        '3': {
          'predicate': 'DC.creator',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/person/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'RADATANA.catalogueName',
                'object': {
                  'datatype': 'literal'
                }
              },
              'c': {
                'predicate': 'FOAF.title',
                'object': {
                  'datatype': 'literal'
                }
              },
              'd': {
                'predicate': 'DEICH.lifespan',
                'object': {
                  'datatype': 'literal'
                }
              },
              'j': {
                'predicate': 'XFOAF.nationality',
                'object': {
                  'datatype': 'uri',
                  'regex_strip': '[\\W]+',
                  'prefix': 'http://data.deichman.no/nationality/',
                  'regex_split': '[\\-]+'
                }
              },
              'q': {
                'predicate': 'FOAF.givenName',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'FOAF.Person'
          }
        }
      }
    },
    '110': {
      'subfield': {
        '3': {
          'predicate': 'DC.creator',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/organization/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'FOAF.name',
                'object': {
                  'datatype': 'literal',
                  'combinestring': '. ',
                  'combine': [
                    'a',
                    'b',
                    'q'
                  ]
                }
              },
              'c': {
                'predicate': 'DEICH.conferencePlace',
                'object': {
                  'datatype': 'literal'
                }
              },
              'd': {
                'predicate': 'DEICH.conferenceDate',
                'object': {
                  'datatype': 'literal'
                }
              },
              'n': {
                'predicate': 'DEICH.corporationNumber',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'FOAF.Organization'
          }
        }
      }
    },
    '111': {
      'subfield': {
        '3': {
          'predicate': 'DC.creator',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/conference/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'FOAF.name',
                'object': {
                  'datatype': 'literal'
                }
              },
              'c': {
                'predicate': 'DEICH.conferencePlace',
                'object': {
                  'datatype': 'literal'
                }
              },
              'd': {
                'predicate': 'DEICH.conferenceDate',
                'object': {
                  'datatype': 'literal'
                }
              },
              'q': {
                'predicate': 'RDF.description',
                'object': {
                  'datatype': 'literal'
                }
              },
              'n': {
                'predicate': 'DEICH.corporationNumber',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'BIBO.Conference'
          }
        }
      }
    },
    '240': {
      'subfield': {
        'a': {
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\.:,;\\/\\s]\\s*$'
          },
          'conditions': {
            'indicator': {
              'default': 'DEICH.originalTitle',
              'indicator1': {
                'subs': {
                  '0': 'DEICH.uniformTitle',
                  '1': 'DEICH.originalTitle'
                },
                'orig': '0|1'
              }
            }
          }
        }
      }
    },
    '245': {
      'subfield': {
        'a': {
          'predicate': 'DC.title',
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\.:,;\\/\\s]\\s*$'
          }
        },
        'p': {
          'predicate': 'FABIO.hasSubtitle',
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\.:,;\\/\\s]\\s*$'
          }
        },
        'c': {
          'predicate': 'RDA.statementOfResponsibility',
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\.:,;\\/\\s]\\s*$'
          }
        },
        'b': {
          'predicate': 'FABIO.hasSubtitle',
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\.:,;\\/\\s]\\s*$'
          }
        },
        'n': {
          'predicate': 'BIBO.number',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '246': {
      'subfield': {
        'a': {
          'predicate': 'RDA.variantTitleForTheWork',
          'object': {
            'datatype': 'literal',
            'combinestring': '. ',
            'combine': [
              'a',
              'b'
            ]
          }
        },
        'p': {
          'predicate': 'RDA.variantTitleForTheWork',
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\.:,;\\/\\s]\\s*$'
          }
        },
        'c': {
          'predicate': 'RDA.statementOfResponsibility',
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\.:,;\\/\\s]\\s*$'
          }
        },
        'b': {
          'predicate': 'RDA.variantTitleForTheWork',
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\.:,;\\/\\s]\\s*$'
          }
        },
        'n': {
          'predicate': 'BIBO.number',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '250': {
      'subfield': {
        'a': {
          'predicate': 'BIBO.edition',
          'object': {
            'datatype': 'literal'
          }
        },
        'b': {
          'predicate': 'RDA.statementOfResponsibility',
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\.:,;\\/\\s]\\s*$'
          }
        }
      }
    },
    '260': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.publicationPlace',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://data.deichman.no/publicationPlace/',
            'urlize': true
          },
          'relation': {
            'subfield': {
              'a': {
                'predicate': 'GEONAMES.name',
                'object': {
                  'datatype': 'literal',
                  'regex_strip': '[\\?\\[\\]\\<\\>]+'
                }
              }
            },
            'class': 'GEONAMES.Feature'
          }
        },
        'c': {
          'predicate': 'DC.issued',
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\[\\]\\?]+'
          }
        },
        'b': {
          'predicate': 'DC.publisher',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://data.deichman.no/organization/',
            'urlize': true
          },
          'relation': {
            'subfield': {
              'b': {
                'predicate': 'FOAF.name',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'FOAF.Organization'
          }
        }
      }
    },
    '300': {
      'subfield': {
        'a': {
          'predicate': 'BIBO.numPages',
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\s]*s[\\.\\s]*$'
          }
        },
        'c': {
          'predicate': 'DEICH.physicalDescription',
          'object': {
            'datatype': 'literal'
          }
        },
        'b': {
          'predicate': 'DEICH.physicalDescription',
          'object': {
            'datatype': 'literal'
          }
        },
        'e': {
          'predicate': 'DEICH.physicalDescription',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '440': {
      'subfield': {
        '3': {
          'predicate': 'DC.isPartOf',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/series/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'DC.title',
                'object': {
                  'datatype': 'literal',
                  'regex_strip': '[\\.:,;\\/\\s]\\s*$'
                }
              },
              'c': {
                'predicate': 'RDA.statementOfResponsibility',
                'object': {
                  'datatype': 'literal',
                  'regex_strip': '[\\.:,;\\/\\s]\\s*$'
                }
              },
              'p': {
                'predicate': 'RDA.variantTitleForTheWork',
                'object': {
                  'datatype': 'literal',
                  'regex_strip': '[\\.:,;\\/\\s]\\s*$'
                }
              },
              'x': {
                'predicate': 'BIBO.issn',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'BIBO.Series'
          }
        },
        'v': {
          'predicate': 'DEICH.volumeNumber',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '503': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.publicationHistory',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '520': {
      'subfield': {
        'a': {
          'predicate': 'DC.abstract',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '521': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.ageLimit',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '546': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.languageNote',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '571': {
      'subfield': {
        'a': {
          'predicate': 'BIBO.identifier',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '572': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.variantTitleNote',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '573': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.titleSourceNote',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '574': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.originalTitleNote',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '590': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.listNote',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '592': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.volumePartNote',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '595': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.periodicalCoverage',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '599': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.signatureNote',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '600': {
      'subfield': {
        't': {
          'predicate': 'DC.subject',
          'object': {
            'combinestring': '_',
            'prefix': 'http://data.deichman.no/work/x',
            'combine': [
              '3',
              't'
            ],
            'urlize': true,
            'datatype': 'uri',
            'regex_strip': '[^\\w\\-]+'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.creator',
                'object': {
                  'datatype': 'uri',
                  'prefix': 'http://data.deichman.no/person/x'
                }
              },
              't': {
                'predicate': 'DC.title',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'FABIO.Work'
          }
        }
      }
    },
    '630': {
      'subfield': {
        '3': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/work/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'DC.title',
                'object': {
                  'datatype': 'literal',
                  'combinestring': '. ',
                  'combine': [
                    'a',
                    'p',
                    'x'
                  ]
                }
              }
            },
            'class': 'FABIO.Work'
          }
        }
      }
    },
    '650': {
      'subfield': {
        '3': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/subject/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'SKOS.prefLabel',
                'object': {
                  'datatype': 'literal',
                  'combinestring': ' - ',
                  'combine': [
                    'a',
                    'q',
                    'x',
                    '0'
                  ],
                  'lang': ':no'
                }
              }
            },
            'class': 'SKOS.Concept'
          }
        }
      }
    },
    '651': {
      'subfield': {
        '3': {
          'predicate': 'DEICH.geographicalSubject',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/geographicalSubject/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'GEONAMES.name',
                'object': {
                  'datatype': 'literal',
                  'regex_strip': '[\\?\\[\\]\\<\\>]+',
                  'lang': ':no'
                }
              }
            },
            'class': 'GEONAMES.Feature'
          }
        }
      }
    },
    '652': {
      'subfield': {
        '3': {
          'predicate': 'MO.genre',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/mogenre/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'RDFS.label',
                'object': {
                  'datatype': 'literal',
                  'lang': ':no'
                }
              }
            },
            'class': 'MO.Genre'
          }
        }
      }
    },
    '653': {
      'subfield': {
        '3': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/keyword/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'SKOS.prefLabel',
                'object': {
                  'datatype': 'literal',
                  'combinestring': ' - ',
                  'combine': [
                    'a',
                    'q',
                    'x',
                    '0'
                  ],
                  'lang': ':no'
                }
              }
            },
            'class': 'SKOS.Concept'
          }
        }
      }
    },
    '655': {
      'subfield': {
        '3': {
          'predicate': 'DBO.literaryGenre',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/genre/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'RDFS.label',
                'object': {
                  'datatype': 'literal',
                  'combinestring': ' - ',
                  'combine': [
                    'a',
                    'x'
                  ],
                  'lang': ':no'
                }
              }
            },
            'class': 'YAGO.LiteraryGenres'
          }
        }
      }
    },
    '690': {
      'subfield': {
        '3': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/subjectMultilingual/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'SKOS.prefLabel',
                'object': {
                  'datatype': 'literal',
                  'combinestring': ' - ',
                  'combine': [
                    'a',
                    'q',
                    'x',
                    '0'
                  ],
                  'lang': ':no'
                }
              }
            },
            'class': 'SKOS.Concept'
          }
        }
      }
    },
    '691': {
      'subfield': {
        '3': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/subjectFiction/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'SKOS.prefLabel',
                'object': {
                  'datatype': 'literal',
                  'combinestring': ' - ',
                  'combine': [
                    'a',
                    'q',
                    'x',
                    '0'
                  ],
                  'lang': ':no'
                }
              }
            },
            'class': 'SKOS.Concept'
          }
        }
      }
    },
    '692': {
      'subfield': {
        '3': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/subjectJuvenileFiction/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'SKOS.prefLabel',
                'object': {
                  'datatype': 'literal',
                  'combinestring': ' - ',
                  'combine': [
                    'a',
                    'q',
                    'x',
                    '0'
                  ],
                  'lang': ':no'
                }
              }
            },
            'class': 'SKOS.Concept'
          }
        }
      }
    },
    '693': {
      'subfield': {
        '3': {
          'predicate': 'DBO.literaryGenre',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/genreJuvenile/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'RDFS.label',
                'object': {
                  'datatype': 'literal',
                  'combinestring': ' - ',
                  'combine': [
                    'a',
                    'x'
                  ],
                  'lang': ':no'
                }
              }
            },
            'class': 'YAGO.LiteraryGenres'
          }
        }
      }
    },
    '694': {
      'subfield': {
        '3': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/keywordJuvenile/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'SKOS.prefLabel',
                'object': {
                  'datatype': 'literal',
                  'combinestring': ' - ',
                  'combine': [
                    'a',
                    'q',
                    'x',
                    '0'
                  ],
                  'lang': ':no'
                }
              }
            },
            'class': 'SKOS.Concept'
          }
        }
      }
    },
    '695': {
      'subfield': {
        'a': {
          'predicate': 'CTAG.tagged',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[^\\w\\-]+',
            'prefix': 'http://data.deichman.no/keyword/',
            'regex_split': ' ',
            'urlize': true
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'CTAG.label',
                'object': {
                  'datatype': 'literal',
                  'lang': ':no'
                }
              }
            },
            'class': 'CTAG.Tag'
          }
        }
      }
    },
    '699': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.bibsubject',
          'object': {
            'combinestring': '_',
            'prefix': 'http://data.deichman.no/subject/',
            'combine': [
              'a',
              'q',
              'x',
              '0'
            ],
            'urlize': true,
            'datatype': 'uri',
            'regex_strip': '[^\\w\\-]+'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'SKOS.prefLabel',
                'object': {
                  'datatype': 'literal',
                  'combinestring': ' - ',
                  'combine': [
                    'a',
                    'q',
                    'x',
                    '0'
                  ],
                  'lang': ':no'
                }
              }
            },
            'class': 'SKOS.Concept'
          }
        }
      }
    },
    '700': {
      'subfield': {
        '3': {
          'conditions': {
            'subfield': {
              'e': {
                'default': 'DC.contributor',
                'subs': {
                  'dir': 'DEICH.director',
                  'komp': 'DEICH.composer',
                  'arr': 'DEICH.musicalArranger',
                  'foto': 'DEICH.photographer',
                  'forf': 'DC.creator',
                  'biogr': 'DEICH.biographer',
                  'utøv': 'DEICH.performer',
                  'innl': 'DEICH.reader',
                  'overs': 'BIBO.translator',
                  'k': 'DEICH.composer',
                  'fort': 'DC.narrator',
                  'medarb': 'DC.contributor',
                  'medforf': 'DC.creator',
                  'gjendikt': 'BIBO.translator',
                  'medf': 'DC.creator',
                  'utg': 'DEICH.publisher',
                  'tekstf': 'DEICH.lyricist',
                  'komm': 'DEICH.commentator',
                  'ill': 'BIBO.illustrator',
                  'oppl': 'DC.narrator',
                  'manusforf': 'DEICH.scriptWriter',
                  'sang': 'DEICH.singer',
                  'skuesp': 'DEICH.actor',
                  'u': 'DEICH.publisher',
                  't': 'DEICH.lyricist',
                  'bearb': 'DC.contributor',
                  'eks': 'DEICH.performer',
                  'reg': 'DEICH.director',
                  'red': 'BIBO.editor'
                },
                'orig': 'arr|bearb|biogr|dir|fort|foto|gjendikt|ill|innl|komm|komp|manusforf|medarb|medforf|medf|oppl|overs|red|reg|sang|skuesp|tekstf|utg|utøv|forf|eks|k|t|u'
              },
              '4': {
                'default': 'DC.contributor',
                'subs': {
                  'aut': 'DC.creator'
                }
              }
            }
          },
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/person/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'RADATANA.catalogueName',
                'object': {
                  'datatype': 'literal'
                }
              },
              'c': {
                'predicate': 'FOAF.title',
                'object': {
                  'datatype': 'literal'
                }
              },
              'b': {
                'predicate': 'BIBO.suffixName',
                'object': {
                  'datatype': 'literal'
                }
              },
              'd': {
                'predicate': 'DEICH.lifespan',
                'object': {
                  'datatype': 'literal'
                }
              },
              'j': {
                'predicate': 'XFOAF.nationality',
                'object': {
                  'datatype': 'uri',
                  'regex_strip': '[\\W]+',
                  'prefix': 'http://data.deichman.no/nationality/',
                  'regex_split': '[\\-]+'
                }
              }
            },
            'class': 'FOAF.Person'
          }
        }
      }
    },
    '710': {
      'subfield': {
        '3': {
          'predicate': 'DC.contributor',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/organization/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'FOAF.name',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'FOAF.Organization'
          }
        }
      }
    },
    '711': {
      'subfield': {
        '3': {
          'predicate': 'DC.contributor',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/conference/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'FOAF.name',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'BIBO.Conference'
          }
        }
      }
    },
    '740': {
      'subfield': {
        'a': {
          'object': {
            'datatype': 'literal'
          },
          'conditions': {
            'indicator': {
              'default': 'DC.alternative',
              'indicator2': {
                'subs': {
                  '0': 'DC.alternative',
                  '2': 'DC.hasPart'
                },
                'orig': '0|2'
              }
            }
          }
        }
      }
    },
    '760': {
      'subfield': {
        'w': {
          'predicate': 'DC.isPartOf',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://data.deichman.no/resource/tnr_'
          }
        }
      }
    },
    '780': {
      'subfield': {
        'w': {
          'predicate': 'DBO.previousWork',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://data.deichman.no/resource/tnr_'
          }
        }
      }
    },
    '785': {
      'subfield': {
        'w': {
          'predicate': 'DBO.subsequentWork',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://data.deichman.no/resource/tnr_'
          }
        }
      }
    },
    '856': {
      'subfield': {
        'u': {
          'predicate': 'FABIO.hasURL',
          'object': {
            'datatype': 'uri',
            'regex_strip': '^.*?(?=http)',
            'urlize': true
          }
        }
      }
    },
    '099': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.listCode',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '090': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.location_category',
          'object': {
            'datatype': 'literal'
          }
        },
        'c': {
          'predicate': 'DEICH.location_dewey',
          'object': {
            'datatype': 'literal'
          }
        },
        'b': {
          'predicate': 'DEICH.location_format',
          'object': {
            'datatype': 'literal'
          }
        },
        'd': {
          'predicate': 'DEICH.location_signature',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '092': {
      'subfield': {
        'a': {
          'predicate': 'DC.location',
          'object': {
            'datatype': 'literal'
          }
        }
      }
    },
    '015': {
      'subfield': {
        'a': {
          'object': {
            'datatype': 'literal'
          },
          'conditions': {
            'subfield': {
              'b': {
                'subs': {
                  'dugnadsbasenibibliofil': 'DEICH.dugnadsbaseID',
                  'bibbi': 'DEICH.bsID',
                  'bibliofilid': 'DEICH.bibliofilID'
                },
                'orig': 'bibbi|bibliofilid|dugnadsbasenibibliofil'
              }
            }
          }
        }
      }
    },
    '019': {
      'subfield': {
        'a': {
          'predicate': 'DC.audience',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/audience/ages_',
            'regex_split': ', *',
            'regex_substitute': {
              'default': 'all',
              'subs': {
                'a': '0-5',
                'bu': '8-9',
                'b': '6-7',
                'u': '10-11',
                'mu': '12-15'
              },
              'orig': 'a|bu|mu|b|u'
            }
          }
        },
        's': {
          'predicate': 'DEICH.ageLimit',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\D]+',
            'prefix': 'http://data.deichman.no/ageLimit/'
          }
        },
        'b': {
          'predicate': 'DC.format',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/format/',
            'regex_split': ', *',
            'regex_substitute': {
              'default': 'Document',
              'subs': {
                'ab': 'Atlas',
                'ee': 'DVD',
                'ed': 'Videotape',
                'ef': 'Blu-ray_Disk',
                'vo': 'File_folder',
                'gg': 'Blu-ray_Disk',
                'ge': 'Web_page',
                'gd': 'CD_ROM',
                'gc': 'DVD-ROM',
                'gb': 'Floppy_disk',
                'ga': 'Computer_file',
                'ic': 'Microfiche',
                'ib': 'Microfilm_reel',
                'gi': 'Nintendo_optical_disc',
                'gt': 'DTbook',
                'na': 'Portable_Document_Format',
                'j': 'Periodical_literature',
                'dj': 'Spoken_word_recording',
                'dh': 'Language_course',
                'di': 'Audiobook',
                'dg': 'Music',
                'dd': 'Digi_book',
                'de': 'Digi_card',
                'db': 'Compact_Cassette',
                'dc': 'Compact_Disc',
                'da': 'Gramophone_record',
                'dz': 'MP3',
                'ff': 'Photography',
                'fm': 'Poster',
                'a': 'Map',
                'c': 'Sheet_music',
                'b': 'Manuscript',
                'ma': 'Personal_computer_game',
                'mc': 'Playstation_3_game',
                'mb': 'Playstation_2_game',
                'h': 'Physical_body',
                'mo': 'Nintendo_Wii_game',
                'mn': 'Nintendo_DS_game',
                'l': 'Book',
                'mj': 'Xbox_360_game',
                'sm': 'Magazine',
                'fd': 'Reversal_film'
              },
              'orig': 'ab|da|db|dc|dd|de|dg|dh|di|dj|dz|ed|ee|ef|fd|ff|fm|ga|gb|gc|gd|ge|gg|gi|gt|h|ib|ic|ma|mb|mc|mj|mn|mo|na|sm|vo|a|b|c|j|l'
            }
          }
        },
        'e': {
          'predicate': 'DEICH.facilitation',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/facilitation/',
            'regex_split': '(\\w{2})',
            'regex_substitute': {
              'default': 'simpleText',
              'subs': {
                'tj': 'capitalized',
                'tf': 'signLanguage',
                'tg': 'tactile',
                'td': 'largePrint',
                'te': 'braille',
                'tb': 'simpleContent',
                'tc': 'largePrint',
                'ta': 'simpleText'
              },
              'orig': 'ta|tb|tc|td|te|tf|tg|tj'
            }
          }
        },
        'd': {
          'predicate': 'DEICH.literaryFormat',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://dbpedia.org/resource/',
            'regex_split': '(\\w{1})',
            'regex_substitute': {
              'default': 'Novel',
              'subs': {
                'a': 'Anthology',
                'b': 'Picture_book',
                'd': 'Poetry',
                'l': 'Textbook',
                'n': 'Short_stories',
                'p': 'Pointing_book',
                's': 'Play_%28theatre%29',
                'r': 'Novel',
                't': 'Comic_book'
              },
              'orig': 'a|b|d|l|n|p|r|s|t'
            }
          }
        }
      }
    },
    '610|611': {
      'subfield': {
        '3': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/organization/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'FOAF.name',
                'object': {
                  'datatype': 'literal',
                  'combinestring': '. ',
                  'combine': [
                    'a',
                    'b',
                    'q'
                  ]
                }
              },
              'c': {
                'predicate': 'DEICH.conferencePlace',
                'object': {
                  'datatype': 'literal'
                }
              },
              'd': {
                'predicate': 'DEICH.conferenceDate',
                'object': {
                  'datatype': 'literal'
                }
              },
              'n': {
                'predicate': 'DEICH.corporationNumber',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'FOAF.Organization'
          }
        }
      }
    },
    '^5(?!03|20|21|46|71|72|73|74|90|92|95|99)': {
      'subfield': {
        'a': {
          'predicate': 'DC.description',
          'object': {
            'datatype': 'literal',
            'lang': ':no'
          }
        }
      }
    },
    '245|245': {
      'subfield': {
        'a': {
          'predicate': 'DEICH.titleURLized',
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\W]+',
            'urlize': true
          }
        }
      }
    },
    '694|694': {
      'subfield': {
        'a': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://data.deichman.no/subject/',
            'urlize': true
          },
          'relation': {
            'subfield': {
              '3': {
                'predicate': 'SKOS.narrower',
                'object': {
                  'datatype': 'uri',
                  'prefix': 'http://data.deichman.no/keywordJuvenile/x'
                }
              },
              'a': {
                'predicate': 'SKOS.prefLabel',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'SKOS.Concept'
          }
        }
      }
    },
    '025': {
      'subfield': {
        'a': {
          'predicate': 'BIBO.eanucc13',
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\D]+'
          }
        }
      }
    },
    '020': {
      'subfield': {
        'a': {
          'predicate': 'BIBO.isbn',
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\D]+'
          }
        },
        'c': {
          'predicate': 'DEICH.priceInfo',
          'object': {
            'datatype': 'literal'
          }
        },
        'b': {
          'predicate': 'DEICH.bindingInfo',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://data.deichman.no/bindingInfo/'
          }
        }
      }
    },
    '022': {
      'subfield': {
        'a': {
          'predicate': 'BIBO.issn',
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\D]+'
          }
        }
      }
    },
    '240|240': {
      'subfield': {
        'a': {
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\W]+',
            'urlize': true
          },
          'conditions': {
            'indicator': {
              'default': 'DEICH.originalTitleURLized',
              'indicator1': {
                'subs': {
                  '0': 'DEICH.uniformTitleURLized',
                  '1': 'DEICH.originalTitleURLized'
                },
                'orig': '0|1'
              }
            }
          }
        }
      }
    },
    '600|600': {
      'subfield': {
        '3': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'prefix': 'http://data.deichman.no/person/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'RADATANA.catalogueName',
                'object': {
                  'datatype': 'literal'
                }
              },
              'c': {
                'predicate': 'FOAF.title',
                'object': {
                  'datatype': 'literal'
                }
              },
              'd': {
                'predicate': 'DEICH.lifespan',
                'object': {
                  'datatype': 'literal'
                }
              },
              'j': {
                'predicate': 'XFOAF.nationality',
                'object': {
                  'datatype': 'uri',
                  'regex_strip': '[\\W]+',
                  'prefix': 'http://data.deichman.no/nationality/',
                  'regex_split': '[\\-]+'
                }
              },
              'q': {
                'predicate': 'FOAF.givenName',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'FOAF.Person'
          }
        }
      }
    },
    '692|692': {
      'subfield': {
        'a': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://data.deichman.no/subject/',
            'urlize': true
          },
          'relation': {
            'subfield': {
              '3': {
                'predicate': 'SKOS.narrower',
                'object': {
                  'datatype': 'uri',
                  'prefix': 'http://data.deichman.no/subjectJuvenileFiction/x'
                }
              },
              'a': {
                'predicate': 'SKOS.prefLabel',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'SKOS.Concept'
          }
        }
      }
    },
    '690|690': {
      'subfield': {
        'a': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://data.deichman.no/subject/',
            'urlize': true
          },
          'relation': {
            'subfield': {
              '3': {
                'predicate': 'SKOS.narrower',
                'object': {
                  'datatype': 'uri',
                  'prefix': 'http://data.deichman.no/subjectMultilingual/x'
                }
              },
              'a': {
                'predicate': 'SKOS.prefLabel',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'SKOS.Concept'
          }
        }
      }
    },
    '130|730': {
      'subfield': {
        '3': {
          'predicate': 'FABIO.isManifestationOf',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[^\\w\\-]+',
            'prefix': 'http://data.deichman.no/work/x'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.identifier',
                'object': {
                  'datatype': 'literal'
                }
              },
              'a': {
                'predicate': 'DC.title',
                'object': {
                  'datatype': 'literal',
                  'combinestring': '. ',
                  'combine': [
                    'a',
                    'p'
                  ]
                }
              }
            },
            'class': 'FABIO.Work'
          }
        }
      }
    },
    '691|691': {
      'subfield': {
        'a': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://data.deichman.no/subject/',
            'urlize': true
          },
          'relation': {
            'subfield': {
              '3': {
                'predicate': 'SKOS.narrower',
                'object': {
                  'datatype': 'uri',
                  'prefix': 'http://data.deichman.no/subjectFiction/x'
                }
              },
              'a': {
                'predicate': 'SKOS.prefLabel',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'SKOS.Concept'
          }
        }
      }
    },
    '700|700': {
      'subfield': {
        't': {
          'predicate': 'DC.hasPart',
          'object': {
            'combinestring': '_',
            'prefix': 'http://data.deichman.no/work/x',
            'combine': [
              '3',
              't'
            ],
            'urlize': true,
            'datatype': 'uri',
            'regex_strip': '[^\\w\\-]+'
          },
          'relation': {
            'subfield': {
              '1': {
                'predicate': 'SKOS.notation',
                'object': {
                  'datatype': 'literal'
                }
              },
              '3': {
                'predicate': 'DC.creator',
                'object': {
                  'datatype': 'uri',
                  'prefix': 'http://data.deichman.no/person/x'
                }
              },
              't': {
                'predicate': 'DC.title',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'FABIO.Work'
          }
        }
      }
    },
    '082': {
      'subfield': {
        'a': {
          'object': {
            'datatype': 'literal',
            'regex_strip': '[\\.:,;\\/\\s]\\s*$'
          },
          'conditions': {
            'indicator': {
              'default': 'DEICH.dewey',
              'indicator1': {
                'subs': {
                  '3': 'DEICH.dewey',
                  ' ': 'DEICH.localCode'
                },
                'orig': '3| '
              }
            }
          }
        }
      }
    },
    '650|650': {
      'subfield': {
        'a': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://data.deichman.no/subject/',
            'urlize': true
          },
          'relation': {
            'subfield': {
              '3': {
                'predicate': 'SKOS.narrower',
                'object': {
                  'datatype': 'uri',
                  'prefix': 'http://data.deichman.no/subject/x'
                }
              },
              'a': {
                'predicate': 'SKOS.prefLabel',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'SKOS.Concept'
          }
        }
      }
    },
    '001': {
      'titleNumber': {
        'predicate': 'DC.identifier',
        'object': {
          'datatype': 'literal'
        }
      }
    },
    '008': {
      'periodicaType': {
        'predicate': 'DEICH.literaryFormat',
        'object': {
          'datatype': 'uri',
          'prefix': 'http://dbpedia.org/resource/',
          'substr_length': 1,
          'regex_substitute': {
            'default': 'Newspaper',
            'subs': {
              'a': 'Yearbook',
              'p': 'Journal',
              'n': 'Newspaper'
            },
            'orig': 'a|n|p'
          },
          'substr_offset': 21
        }
      },
      'language': {
        'predicate': 'DC.language',
        'object': {
          'datatype': 'uri',
          'prefix': 'http://lexvo.org/id/iso639-3/',
          'substr_length': 3,
          'substr_offset': 35
        },
        'relation': {
          'class': 'LVONT.Language'
        }
      },
      'biocontent': {
        'predicate': 'DEICH.bioContent',
        'object': {
          'datatype': 'uri',
          'prefix': 'http://data.deichman.no/bioContent/',
          'substr_length': 1,
          'regex_substitute': {
            'default': 'biography',
            'subs': {
              '0': 'nonBiography',
              '1': 'biography',
              'a': 'autobiography',
              'c': 'collectedBiography',
              'b': 'monoBiography',
              'd': 'partlyBiographic'
            },
            'orig': '0|1|a|b|c|d'
          },
          'substr_offset': 34
        }
      },
      'script': {
        'predicate': 'DEICH.script',
        'object': {
          'datatype': 'uri',
          'prefix': 'http://dbpedia.org/resource/',
          'substr_length': 1,
          'regex_substitute': {
            'default': 'ISO_basic_Latin_alphabet',
            'subs': {
              'a': 'ISO_basic_Latin_alphabet',
              'c': 'Cyrillic_script',
              'b': 'Latin-derived_alphabet',
              'e': 'Chinese_characters',
              'd': 'Japanese_writing_system',
              'g': 'Greek_alphabet',
              'f': 'Arabic_alphabet',
              'i': 'Thai_alphabet',
              'm': 'Blackletter',
              'l': 'Tamil_alphabet'
            },
            'orig': 'a|b|c|d|e|f|g|i|l|m'
          },
          'substr_offset': 38
        }
      },
      'audience': {
        'predicate': 'DC.audience',
        'object': {
          'datatype': 'uri',
          'prefix': 'http://data.deichman.no/audience/',
          'substr_length': 1,
          'regex_substitute': {
            'default': 'adult',
            'subs': {
              'a': 'adult',
              'j': 'juvenile'
            },
            'orig': 'a|j'
          },
          'substr_offset': 22
        }
      },
      'literaryformat': {
        'predicate': 'DEICH.literaryFormat',
        'object': {
          'datatype': 'uri',
          'prefix': 'http://dbpedia.org/resource/',
          'substr_length': 1,
          'regex_substitute': {
            'default': 'Fiction',
            'subs': {
              '0': 'Non-fiction',
              '1': 'Fiction'
            },
            'orig': '0|1'
          },
          'substr_offset': 33
        }
      },
      'cataloguingDate': {
        'predicate': 'DEICH.cataloguingDate',
        'object': {
          'datatype': 'literal',
          'substr_length': 6,
          'substr_offset': 0
        }
      },
      'contentCode': {
        'predicate': 'DEICH.literaryFormat',
        'object': {
          'prefix': 'http://dbpedia.org/resource/',
          'substr_length': 4,
          'regex_substitute': {
            'default': 'Document',
            'subs': {
              'a': 'R%C3%A9sum%C3%A9',
              'b': 'Bibliography',
              'e': 'Encyclopedia',
              'd': 'Dictionary',
              'f': 'User_guide',
              'i': 'Back-of-the-book_index',
              'h': 'Yearbook',
              'k': 'Discograhy',
              'm': 'Thesis',
              'l': 'Legal_writing',
              'o': 'Review',
              's': 'Statistics',
              'r': 'Reference_work',
              'w': 'Magazine',
              'x': 'Dissertation'
            },
            'orig': 'a|b|d|e|f|h|i|k|l|m|o|r|s|w|x'
          },
          'datatype': 'uri',
          'regex_split': '(\\w{1})',
          'substr_offset': 24
        }
      }
    },
    '041': {
      'subfield': {
        'a': {
          'predicate': 'DC.language',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://lexvo.org/id/iso639-3/',
            'regex_split': '(\\w{3})'
          },
          'relation': {
            'class': 'LVONT.Language'
          }
        },
        'h': {
          'predicate': 'DEICH.originalLanguage',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://lexvo.org/id/iso639-3/',
            'regex_split': '(\\w{3})'
          }
        },
        'b': {
          'predicate': 'DEICH.subTitles',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://lexvo.org/id/iso639-3/',
            'regex_split': '(\\w{3})'
          }
        }
      }
    },
    '653|653': {
      'subfield': {
        'a': {
          'predicate': 'DC.subject',
          'object': {
            'datatype': 'uri',
            'regex_strip': '[\\W]+',
            'prefix': 'http://data.deichman.no/subject/',
            'urlize': true
          },
          'relation': {
            'subfield': {
              '3': {
                'predicate': 'SKOS.narrower',
                'object': {
                  'datatype': 'uri',
                  'prefix': 'http://data.deichman.no/keyword/x'
                }
              },
              'a': {
                'predicate': 'SKOS.prefLabel',
                'object': {
                  'datatype': 'literal'
                }
              }
            },
            'class': 'SKOS.Concept'
          }
        }
      }
    }
  }
} as MappingTypes
