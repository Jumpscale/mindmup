function test_tree() {
    return {
      "id": "root",
      "formatVersion": 3,
      "ideas": {
        "1": {
          "id": 1,
          "title": "Goals",
          "attr": {
            "position": [
              -1220,
              -231,
              1
            ],
            "collapsed": true
          },
          "ideas": {
            "1": {
              "title": "most productivity for further development",
              "id": "2.40d8eab09746d238",
              "ideas": {
                "1": {
                  "title": "kanban view on gogs",
                  "id": "8.40d8eab09746d238"
                },
                "2": {
                  "title": "ays needs to be better understood & used",
                  "id": "17.40d8eab09746d238"
                },
                "3": {
                  "title": "foundations need to be more solid",
                  "id": "21.40d8eab09746d238",
                  "ideas": {
                    "1": {
                      "title": "cuisine",
                      "id": "22.40d8eab09746d238",
                      "ideas": {},
                      "attr": {
                        "note": {
                          "index": 6,
                          "text": "is basis for our building and as such needs to be much more tested & proven. We need to be able to rely on it."
                        }
                      }
                    },
                    "2": {
                      "title": "better sandbox",
                      "id": "27.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "python",
                          "id": "28.40d8eab09746d238"
                        },
                        "2": {
                          "title": "portal",
                          "id": "29.40d8eab09746d238",
                          "ideas": {
                            "1": {
                              "title": "javascript libs are now in git, need to be autobuild",
                              "id": "30.40d8eab09746d238"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "11": {
              "title": "survive roll out of 10+ deployments over next months",
              "id": "3.40d8eab09746d238",
              "ideas": {
                "1": {
                  "title": "need better self healing",
                  "id": "9.40d8eab09746d238",
                  "ideas": {
                    "1": {
                      "title": "need better ays",
                      "id": "231.61ad510de665e14b",
                      "ideas": {
                        "1": {
                          "title": "will improve visibility\nwill use:.. http://npyscreen.readthedocs.io/index.html",
                          "id": "232.61ad510de665e14b"
                        }
                      }
                    }
                  }
                },
                "2": {
                  "title": "more security",
                  "id": "10.40d8eab09746d238",
                  "ideas": {
                    "1": {
                      "title": "safekeeper",
                      "id": "229.61ad510de665e14b"
                    }
                  }
                }
              }
            },
            "41": {
              "title": "be ready for future",
              "id": "6.40d8eab09746d238",
              "ideas": {
                "1": {
                  "title": "g8OS usable in OVC",
                  "id": "19.40d8eab09746d238"
                }
              }
            }
          }
        },
        "3": {
          "title": "improvements NOW",
          "id": "18.40d8eab09746d238",
          "attr": {
            "position": [
              -401,
              -534,
              1
            ],
            "style": {
              "background": "#990033"
            },
            "progress": "blocked"
          },
          "ideas": {
            "1": {
              "title": "cuisine",
              "id": "25.40d8eab09746d238",
              "ideas": {
                "2": {
                  "title": "Finish Critical Cuisine Libs",
                  "id": "32.40d8eab09746d238",
                  "ideas": {
                    "1": {
                      "title": "Autotests",
                      "id": "33.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "docker based ",
                          "id": "34.40d8eab09746d238",
                          "attr": {
                            "style": {
                              "background": "#FFFF99"
                            }
                          }
                        },
                        "2": {
                          "title": "over ssh & local connection",
                          "id": "35.40d8eab09746d238",
                          "attr": {
                            "style": {
                              "background": "#FFFF99"
                            }
                          }
                        },
                        "3": {
                          "title": "only ub1604",
                          "id": "36.40d8eab09746d238",
                          "attr": {
                            "style": {
                              "background": "#FFFF99"
                            }
                          }
                        },
                        "4": {
                          "title": "running on packet.net",
                          "id": "37.40d8eab09746d238",
                          "attr": {
                            "style": {
                              "background": "#FFFF99"
                            }
                          }
                        },
                        "5": {
                          "title": "driven by ays",
                          "id": "38.40d8eab09746d238",
                          "attr": {
                            "note": {
                              "index": 32,
                              "text": "is like how we do the building of components today"
                            },
                            "style": {
                              "background": "#FFFF99"
                            }
                          }
                        },
                        "6": {
                          "title": "implement a test method which does some basic test over cuisine for that component",
                          "id": "39.40d8eab09746d238",
                          "attr": {
                            "style": {
                              "background": "#FFFF99"
                            }
                          }
                        },
                        "7": {
                          "title": "create some scenario tests where multiple components are used at once",
                          "id": "40.40d8eab09746d238",
                          "attr": {
                            "style": {
                              "background": "#FFFF99"
                            }
                          }
                        }
                      }
                    },
                    "2": {
                      "title": "needs to be clean",
                      "id": "41.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "use proper DIR names ",
                          "id": "43.40d8eab09746d238",
                          "attr": {
                            "style": {
                              "background": "#FFFF99"
                            }
                          }
                        },
                        "2": {
                          "title": "use doneGet/doneSet",
                          "id": "44.40d8eab09746d238",
                          "attr": {
                            "style": {
                              "background": "#FFFF99"
                            }
                          }
                        },
                        "3": {
                          "title": "look at existing implementation of e.g. syncthing, python build",
                          "id": "45.40d8eab09746d238",
                          "attr": {
                            "style": {
                              "background": "#FFFF99"
                            }
                          }
                        },
                        "4": {
                          "title": "build <> install",
                          "id": "47.40d8eab09746d238",
                          "attr": {
                            "style": {
                              "background": "#FFFF99"
                            }
                          }
                        },
                        "5": {
                          "title": "build to BUILDDIR",
                          "id": "48.40d8eab09746d238",
                          "attr": {
                            "style": {
                              "background": "#FFFF99"
                            }
                          }
                        },
                        "6": {
                          "title": "install copies FROM BUILDDIR",
                          "id": "49.40d8eab09746d238",
                          "attr": {
                            "style": {
                              "background": "#FFFF99"
                            }
                          }
                        },
                        "7": {
                          "title": "need to have proper doc's & examples, need to be checked.",
                          "id": "71.40d8eab09746d238",
                          "attr": {
                            "style": {
                              "background": "#FFFF99"
                            }
                          }
                        },
                        "8": {
                          "title": "write documentation how to create a cuisine module",
                          "id": "219.61ad510de665e14b"
                        }
                      },
                      "attr": {
                        "style": {
                          "background": "#FFFF99"
                        }
                      }
                    }
                  }
                },
                "6": {
                  "title": "components",
                  "id": "56.40d8eab09746d238",
                  "ideas": {
                    "2": {
                      "title": "Syncthing",
                      "id": "51.40d8eab09746d238",
                      "attr": {}
                    },
                    "3": {
                      "title": "GOGS",
                      "id": "54.40d8eab09746d238",
                      "ideas": {},
                      "attr": {
                        "style": {
                          "background": "#000080"
                        },
                        "progress": "parked"
                      }
                    },
                    "4": {
                      "title": "python sandbox",
                      "id": "31.40d8eab09746d238",
                      "attr": {
                        "note": {
                          "index": 25,
                          "text": "build on 16.04 and make sure is build on right destination, pip also working (90% done)\nwill be used as basis for all our further js8... work, no more deps on OS'es"
                        },
                        "style": {
                          "background": "#990033"
                        },
                        "progress": "blocked"
                      }
                    },
                    "5": {
                      "title": "rsync (reem)",
                      "id": "66.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "server over tcp",
                          "id": "84.40d8eab09746d238"
                        },
                        "2": {
                          "title": "security rsync",
                          "id": "86.40d8eab09746d238"
                        },
                        "3": {
                          "title": "use/create sal over executor",
                          "id": "87.40d8eab09746d238"
                        }
                      },
                      "attr": {
                        "style": {
                          "background": "#FF0000"
                        },
                        "progress": "1"
                      }
                    },
                    "6": {
                      "title": "btrfs ",
                      "id": "69.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "btrfs sal integration",
                          "id": "70.40d8eab09746d238",
                          "attr": {
                            "note": {
                              "index": 52,
                              "text": "will be used behind e.g. rsync server"
                            }
                          }
                        }
                      },
                      "attr": {
                        "style": {
                          "background": "#FF0000"
                        },
                        "progress": "1"
                      }
                    },
                    "7": {
                      "title": "ftp",
                      "id": "73.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "python lib",
                          "id": "75.40d8eab09746d238",
                          "attr": {
                            "note": {
                              "index": 54,
                              "text": "there is this python lib which can be used, is good enough, 1 only 1 script simple documentation\nwill be used in first AYSFS"
                            }
                          }
                        }
                      }
                    },
                    "8": {
                      "title": "mattermost",
                      "id": "98.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "How easy to integrate with IYO?",
                          "attr": {
                            "style": {
                              "background": "#000080"
                            },
                            "progress": "parked"
                          },
                          "ideas": {},
                          "id": "100.40d8eab09746d238"
                        }
                      }
                    },
                    "9": {
                      "title": "DNS (reem)",
                      "id": "107.40d8eab09746d238",
                      "ideas": {
                        "3": {
                          "title": "requirements",
                          "id": "114.40d8eab09746d238",
                          "ideas": {
                            "1": {
                              "title": "secure",
                              "id": "115.40d8eab09746d238"
                            },
                            "2": {
                              "title": "small",
                              "id": "116.40d8eab09746d238"
                            },
                            "3": {
                              "title": "scalable/fast",
                              "id": "117.40d8eab09746d238"
                            },
                            "4": {
                              "title": "easy to administer",
                              "id": "118.40d8eab09746d238",
                              "ideas": {
                                "1": {
                                  "title": "monitor",
                                  "id": "119.40d8eab09746d238",
                                  "ideas": {}
                                },
                                "2": {
                                  "title": "understand",
                                  "id": "121.40d8eab09746d238"
                                },
                                "3": {
                                  "title": "deploy",
                                  "id": "122.40d8eab09746d238"
                                }
                              }
                            }
                          }
                        },
                        "4": {
                          "title": "geodns see https://github.com/abh/geodns",
                          "id": "233.61ad510de665e14b",
                          "ideas": {
                            "1": {
                              "title": "need SAL",
                              "id": "109.40d8eab09746d238",
                              "ideas": {},
                              "attr": {}
                            }
                          }
                        }
                      },
                      "attr": {
                        "style": {
                          "background": "#00CCFF"
                        },
                        "progress": "under-review"
                      }
                    },
                    "10": {
                      "title": "zerotier (reem)",
                      "id": "124.40d8eab09746d238",
                      "attr": {
                        "style": {
                          "background": "#FFCC00"
                        },
                        "progress": "in-progress"
                      }
                    },
                    "12": {
                      "title": "caddy",
                      "id": "153.40d8eab09746d238",
                      "ideas": {}
                    },
                    "13": {
                      "title": "Owncloud",
                      "id": "225.61ad510de665e14b"
                    },
                    "14": {
                      "title": "portal (reem)",
                      "id": "226.61ad510de665e14b",
                      "ideas": {
                        "1": {
                          "title": "javascript libs",
                          "id": "148.40d8eab09746d238",
                          "ideas": {},
                          "attr": {}
                        }
                      },
                      "attr": {
                        "style": {
                          "background": "#FFCC00"
                        },
                        "progress": "in-progress"
                      }
                    }
                  },
                  "attr": {
                    "style": {
                      "background": "#990033"
                    },
                    "progress": "blocked"
                  }
                },
                "7": {
                  "title": "SSH Portforward see notes",
                  "id": "58.40d8eab09746d238",
                  "ideas": {},
                  "attr": {
                    "note": {
                      "index": 49,
                      "text": "goal is to have a generic usable function which setups portforward over ssh to allow connection to remote servers e.g. to syncthing rest api but only over ssh, not over external connection.\n\nThis allows easier tests e.g. call the rest api, ...\nor for further configuration.\n\nThis also means firewalls can be kept closed\n\nfor usage do:\nc=j.tools.cuisine.get(\"ovh4\");c.executor.sshclient.portforwardToLocal(16379,16379)"
                    },
                    "style": {
                      "background": "#00CC00"
                    },
                    "progress": "passing"
                  }
                }
              },
              "attr": {
                "style": {
                  "background": "#990033"
                },
                "progress": "blocked"
              }
            },
            "2": {
              "title": "secure build",
              "attr": {
                "note": {
                  "index": 38,
                  "text": "goal is that we can build all our apps securely and that result gets dumped to backendstor by using python client which is using the nimlang lib to backendstor"
                },
                "collapsed": true
              },
              "id": "53.40d8eab09746d238",
              "ideas": {
                "1": {
                  "title": "usage of PGP for building/git",
                  "id": "146.40d8eab09746d238"
                },
                "2": {
                  "title": "reliable way to repeatable build & dump to AYSFS",
                  "id": "147.40d8eab09746d238"
                }
              }
            },
            "3": {
              "title": "ays",
              "id": "145.40d8eab09746d238",
              "ideas": {
                "1": {
                  "title": "ays framework",
                  "id": "60.40d8eab09746d238",
                  "ideas": {
                    "1": {
                      "title": "change mgmt has issues",
                      "id": "133.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "sometimes wrong AYS show change & runs are not ok",
                          "id": "137.40d8eab09746d238"
                        }
                      }
                    },
                    "2": {
                      "title": "not easy enough to use, need better visualization",
                      "id": "134.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "from cmd line",
                          "id": "135.40d8eab09746d238"
                        }
                      }
                    },
                    "3": {
                      "title": "need security integrated",
                      "id": "138.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "fine grained access to mods & access of actions",
                          "id": "140.40d8eab09746d238"
                        }
                      }
                    },
                    "4": {
                      "title": "better execution of actions",
                      "id": "141.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "more visible",
                          "id": "142.40d8eab09746d238",
                          "ideas": {}
                        }
                      }
                    },
                    "5": {
                      "title": "remove hrd",
                      "id": "144.40d8eab09746d238",
                      "attr": {
                        "style": {
                          "background": "#FF00FF"
                        },
                        "progress": "2"
                      }
                    }
                  },
                  "attr": {
                    "collapsed": true
                  }
                },
                "2": {
                  "title": "ays usage",
                  "id": "61.40d8eab09746d238",
                  "ideas": {
                    "1": {
                      "title": "dockers",
                      "id": "62.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "integration with zerotier",
                          "id": "63.40d8eab09746d238",
                          "attr": {
                            "style": {
                              "background": "#FF0000"
                            },
                            "progress": "1",
                            "note": {
                              "index": 54,
                              "text": "make sure we can easily over dockers put zerotier network from AYS, this allows easy testing as well as easy deployment withouth having to wait for full G8os"
                            }
                          },
                          "ideas": {
                            "1": {
                              "title": "docu",
                              "id": "64.40d8eab09746d238"
                            },
                            "2": {
                              "title": "some test blueprints",
                              "id": "65.40d8eab09746d238"
                            }
                          }
                        }
                      },
                      "attr": {
                        "style": {
                          "background": "#FF0000"
                        },
                        "progress": "1"
                      }
                    },
                    "2": {
                      "title": "AYSFS",
                      "id": "72.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "monitoring",
                          "id": "76.40d8eab09746d238"
                        },
                        "2": {
                          "title": "replication",
                          "id": "77.40d8eab09746d238",
                          "ideas": {
                            "1": {
                              "title": "based on rsync & scheduled AYS methods",
                              "id": "78.40d8eab09746d238"
                            }
                          }
                        },
                        "3": {
                          "title": "snapshots(btrfs)",
                          "id": "79.40d8eab09746d238"
                        },
                        "4": {
                          "title": "backup:",
                          "id": "80.40d8eab09746d238",
                          "ideas": {
                            "1": {
                              "title": "to other AYSFS",
                              "id": "81.40d8eab09746d238",
                              "ideas": {}
                            },
                            "2": {
                              "title": "golang tool",
                              "id": "83.40d8eab09746d238",
                              "attr": {
                                "note": {
                                  "index": 71,
                                  "text": "forgot name @despiegk TODO: *1 , look/document"
                                }
                              }
                            }
                          }
                        },
                        "5": {
                          "title": "zerotier support",
                          "id": "90.40d8eab09746d238"
                        }
                      },
                      "attr": {
                        "note": {
                          "index": 64,
                          "text": "create rsync/ftp based storage pool for e.g. images, builds, ...\nmanaged by AYS\nis to make sure we have something, without serious complexity\nrequires btrfs,rsync & ftp cuisine libs."
                        },
                        "collapsed": true
                      }
                    },
                    "3": {
                      "title": "internal IT",
                      "id": "91.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "components",
                          "id": "92.40d8eab09746d238",
                          "ideas": {
                            "1": {
                              "title": "GOGS",
                              "id": "93.40d8eab09746d238",
                              "ideas": {}
                            },
                            "2": {
                              "title": "Owncloud",
                              "id": "94.40d8eab09746d238"
                            },
                            "3": {
                              "title": "mattermost",
                              "id": "95.40d8eab09746d238"
                            },
                            "4": {
                              "title": "AYSFS",
                              "id": "131.40d8eab09746d238"
                            }
                          }
                        },
                        "2": {
                          "title": "requirements",
                          "id": "103.40d8eab09746d238",
                          "ideas": {
                            "1": {
                              "title": "zerotier & replicated",
                              "id": "104.40d8eab09746d238",
                              "ideas": {}
                            },
                            "2": {
                              "title": "DNS integrated",
                              "id": "106.40d8eab09746d238"
                            },
                            "3": {
                              "title": "ays driven",
                              "id": "125.40d8eab09746d238",
                              "attr": {
                                "note": {
                                  "index": 99,
                                  "text": "AYS and nothing else than AYS driven"
                                }
                              }
                            }
                          }
                        },
                        "3": {
                          "title": "new servers",
                          "id": "127.40d8eab09746d238",
                          "ideas": {
                            "1": {
                              "title": "2x 2TB machines",
                              "id": "128.40d8eab09746d238",
                              "ideas": {}
                            },
                            "2": {
                              "title": "3x SSD nodes",
                              "id": "130.40d8eab09746d238"
                            }
                          },
                          "attr": {
                            "note": {
                              "index": 100,
                              "text": "will run most of our production workloads all on AYS\nis in OVS"
                            }
                          }
                        },
                        "4": {
                          "title": "check cockpit integration",
                          "id": "132.40d8eab09746d238",
                          "attr": {}
                        }
                      }
                    },
                    "5": {
                      "title": "https loadbalancers",
                      "id": "155.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "caddy in docker",
                          "id": "156.40d8eab09746d238"
                        },
                        "2": {
                          "title": "caddy connected to zerotier",
                          "id": "157.40d8eab09746d238"
                        },
                        "3": {
                          "title": "caddy connected to pub on 3 sites",
                          "id": "158.40d8eab09746d238"
                        },
                        "4": {
                          "title": "all automated over ays",
                          "id": "160.40d8eab09746d238"
                        }
                      },
                      "attr": {
                        "collapsed": true
                      }
                    }
                  },
                  "attr": {
                    "style": {
                      "background": "#C0C0C0"
                    },
                    "progress": "not-started"
                  }
                }
              },
              "attr": {
                "style": {
                  "background": "#C0C0C0"
                },
                "progress": "not-started",
                "collapsed": true
              }
            },
            "4": {
              "title": "IYO",
              "id": "218.61ad510de665e14b"
            },
            "5": {
              "title": "Owncloud",
              "id": "50.40d8eab09746d238",
              "ideas": {
                "1": {
                  "title": "How easy to integrate with IYO",
                  "id": "52.40d8eab09746d238",
                  "ideas": {},
                  "attr": {
                    "style": {
                      "background": "#000080"
                    },
                    "progress": "parked"
                  }
                }
              },
              "attr": {
                "style": {
                  "background": "#000080"
                },
                "progress": "parked"
              }
            },
            "-1": {
              "title": "portal",
              "id": "150.40d8eab09746d238",
              "ideas": {
                "1": {
                  "title": "integrate with build jslibs",
                  "id": "151.40d8eab09746d238",
                  "ideas": {
                    "1": {
                      "title": "using nodejs for it",
                      "id": "149.40d8eab09746d238",
                      "attr": {}
                    }
                  }
                },
                "2": {
                  "title": "deploy caddy as standard",
                  "id": "152.40d8eab09746d238"
                }
              },
              "attr": {
                "collapsed": true
              }
            },
            "-3": {
              "title": "kanban",
              "id": "170.40d8eab09746d238",
              "ideas": {
                "1": {
                  "title": "github",
                  "id": "171.40d8eab09746d238",
                  "ideas": {
                    "1": {
                      "title": "get data in the data structure",
                      "id": "173.40d8eab09746d238",
                      "attr": {
                        "style": {
                          "background": "#C0C0C0"
                        },
                        "progress": "not-started"
                      }
                    }
                  },
                  "attr": {
                    "style": {
                      "background": "#C0C0C0"
                    },
                    "progress": "not-started"
                  }
                },
                "2": {
                  "title": "gogs",
                  "id": "172.40d8eab09746d238",
                  "ideas": {
                    "1": {
                      "title": "need testing",
                      "id": "174.40d8eab09746d238",
                      "attr": {
                        "style": {
                          "background": "#FF0000"
                        },
                        "progress": "1"
                      }
                    }
                  },
                  "attr": {
                    "style": {
                      "background": "#FF0000"
                    },
                    "progress": "1"
                  }
                },
                "3": {
                  "title": "portal integration",
                  "id": "176.40d8eab09746d238",
                  "ideas": {
                    "1": {
                      "title": "docs",
                      "id": "177.40d8eab09746d238"
                    },
                    "2": {
                      "title": "check macros",
                      "id": "178.40d8eab09746d238"
                    }
                  }
                },
                "4": {
                  "title": "we need the right logic for our data",
                  "id": "228.61ad510de665e14b"
                }
              },
              "attr": {
                "style": {
                  "background": "#FF0000"
                },
                "progress": "1",
                "collapsed": true
              }
            },
            "-4": {
              "title": "be ready for G8OS FS",
              "id": "180.40d8eab09746d238",
              "ideas": {
                "1": {
                  "title": "nimble python module upload/compress/encr to ardb",
                  "id": "181.40d8eab09746d238",
                  "ideas": {
                    "1": {
                      "title": "docu",
                      "id": "183.40d8eab09746d238"
                    },
                    "2": {
                      "title": "performance test from python",
                      "id": "184.40d8eab09746d238"
                    },
                    "3": {
                      "title": "performance test from nimble",
                      "id": "185.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "1m small files",
                          "id": "186.40d8eab09746d238",
                          "ideas": {}
                        },
                        "2": {
                          "title": "100 100 MB files",
                          "id": "188.40d8eab09746d238"
                        }
                      }
                    },
                    "4": {
                      "title": "integration with python",
                      "id": "189.40d8eab09746d238",
                      "ideas": {
                        "1": {
                          "title": "install std",
                          "id": "191.40d8eab09746d238"
                        }
                      }
                    }
                  }
                },
                "2": {
                  "title": "new flist 8.2.0",
                  "id": "192.40d8eab09746d238",
                  "ideas": {
                    "1": {
                      "title": "upload from flist to ardb using this .so module",
                      "id": "193.40d8eab09746d238"
                    },
                    "2": {
                      "title": "download/upload test",
                      "id": "194.40d8eab09746d238"
                    },
                    "3": {
                      "title": "low level fuse POC python",
                      "id": "195.40d8eab09746d238",
                      "ideas": {},
                      "attr": {
                        "note": {
                          "index": 152,
                          "text": "will allow us to play with functionality before we integrate in G8OS\nshould also develop faster (have same .so upload.download module"
                        }
                      }
                    }
                  }
                }
              },
              "attr": {
                "collapsed": true
              }
            },
            "-5": {
              "title": "GOGS",
              "id": "222.61ad510de665e14b",
              "ideas": {
                "1": {
                  "title": "How easy to integrate with IYO?",
                  "ideas": {},
                  "id": "55.40d8eab09746d238",
                  "attr": {
                    "style": {
                      "background": "#000080"
                    },
                    "progress": "parked"
                  }
                },
                "2": {
                  "title": "fork",
                  "id": "223.61ad510de665e14b"
                },
                "3": {
                  "title": "more modular",
                  "id": "224.61ad510de665e14b"
                }
              },
              "attr": {
                "collapsed": true
              }
            },
            "-6": {
              "title": "itsyou.online",
              "id": "239.52377f402db0b6c3",
              "ideas": {
                "1": {
                  "title": "link https://drive.google.com/a/greenitglobe.com/file/d/0B_dXq0dA11-sNE5hR3NuM3RDNEE/view?usp=sharing",
                  "id": "241.52377f402db0b6c3"
                }
              },
              "attr": {
                "style": {
                  "background": "#FF0000"
                },
                "progress": "1"
              }
            }
          }
        },
        "4": {
          "title": "critical",
          "id": "197.40d8eab09746d238",
          "attr": {
            "position": [
              -1223,
              -126,
              1
            ],
            "style": {
              "background": "#000080"
            },
            "progress": "parked",
            "collapsed": true
          },
          "ideas": {
            "1": {
              "title": "OVS",
              "id": "198.40d8eab09746d238",
              "ideas": {
                "1": {
                  "title": "performance?",
                  "id": "209.61ad510de665e14b",
                  "ideas": {
                    "1": {
                      "title": "the network was using lots of cpu is that still the case",
                      "id": "212.61ad510de665e14b",
                      "attr": {
                        "style": {
                          "background": "#000080"
                        },
                        "progress": "parked"
                      },
                      "ideas": {
                        "1": {
                          "title": "OVSWitch? (ovs is not used by storage)",
                          "id": "215.61ad510de665e14b"
                        },
                        "2": {
                          "title": "check DPDK with OVSWitch (still necessaryfor vm-vm perf)",
                          "id": "216.61ad510de665e14b"
                        }
                      }
                    }
                  },
                  "attr": {
                    "style": {
                      "background": "#000080"
                    },
                    "progress": "parked"
                  }
                },
                "2": {
                  "title": "rdma?",
                  "id": "210.61ad510de665e14b",
                  "ideas": {
                    "1": {
                      "title": "is this really required?",
                      "id": "211.61ad510de665e14b"
                    }
                  }
                }
              },
              "attr": {
                "style": {
                  "background": "#000080"
                },
                "progress": "parked",
                "position": [
                  59,
                  -149,
                  2
                ]
              }
            },
            "11": {
              "title": "demonstrate self healing",
              "id": "199.40d8eab09746d238",
              "ideas": {
                "1": {
                  "title": "use for internal IT",
                  "id": "200.40d8eab09746d238",
                  "ideas": {}
                },
                "2": {
                  "title": "use for building",
                  "id": "202.40d8eab09746d238"
                }
              }
            },
            "12": {
              "title": "internal IT ",
              "id": "161.40d8eab09746d238",
              "ideas": {
                "1": {
                  "title": "now adhoc & non automated",
                  "id": "162.40d8eab09746d238"
                },
                "2": {
                  "title": "we have services everywhere",
                  "id": "163.40d8eab09746d238"
                },
                "3": {
                  "title": "very unclear who does what",
                  "id": "164.40d8eab09746d238"
                }
              }
            },
            "22": {
              "title": "development\nproductivity improvements",
              "id": "207.40d8eab09746d238",
              "attr": {
                "position": [
                  76,
                  151,
                  1
                ]
              }
            },
            "19.5": {
              "title": "OVC",
              "id": "205.40d8eab09746d238",
              "ideas": {
                "1": {
                  "title": "???",
                  "id": "206.40d8eab09746d238"
                },
                "2": {
                  "title": "ORK",
                  "id": "214.61ad510de665e14b",
                  "attr": {
                    "style": {
                      "background": "#FF00FF"
                    },
                    "progress": "2"
                  }
                }
              },
              "attr": {
                "style": {
                  "width": 50
                },
                "collapsed": true
              }
            },
            "20.75": {
              "title": "need to pay for itsyouonline CC",
              "id": "217.61ad510de665e14b"
            }
          }
        },
        "5": {
          "title": "practical",
          "id": "234.61ad510de665e14b",
          "attr": {
            "position": [
              -1181,
              164,
              1
            ]
          },
          "ideas": {
            "1": {
              "title": "milestones",
              "id": "235.61ad510de665e14b",
              "ideas": {
                "1": {
                  "title": "js: 8.2.0",
                  "id": "236.61ad510de665e14b"
                },
                "2": {
                  "title": "itsyouonline:??? TODO",
                  "id": "237.61ad510de665e14b"
                },
                "3": {
                  "title": "OVC:???",
                  "id": "238.61ad510de665e14b"
                }
              }
            }
          }
        }
      },
      "attr": {
        "progress-statuses": {
          "1": {
            "description": "Urgent",
            "style": {
              "background": "#FF0000"
            },
            "priority": 4
          },
          "2": {
            "description": "Less Important",
            "style": {
              "background": "#FF00FF"
            }
          },
          "blocked": {
            "description": "Blocked",
            "style": {
              "background": "#990033"
            },
            "priority": 4
          },
          "in-progress": {
            "description": "In Progress",
            "style": {
              "background": "#FFCC00"
            },
            "priority": 3
          },
          "parked": {
            "description": "Question/Parked",
            "style": {
              "background": "#000080"
            },
            "priority": 2
          },
          "under-review": {
            "description": "Validation",
            "style": {
              "background": "#00CCFF"
            },
            "priority": 2
          },
          "not-started": {
            "description": "Planned",
            "style": {
              "background": "#C0C0C0"
            },
            "priority": 1
          },
          "passing": {
            "description": "Done",
            "style": {
              "background": "#00CC00"
            }
          }
        },
        "style": {
          "background": "#990033"
        },
        "progress": "blocked"
      },
      "title": "Goals",
      "links": []
    }

}
