# [LongBowDB](https://JMencius.github.io/LongBowDB)
A database hosting predicted basecaller configurations of nanopore sequencing data in the SRA database.

## Link
https://JMencius.github.io/LongBowDB
<br>

## Citation
If you used LongBowDB, please cite:
Mencius, J., Chen, W., Zheng, Y. et al. Restoring flowcell type and basecaller configuration from FASTQ files of nanopore sequencing data. Nat Commun 16, 4102 (2025). 

<https://doi.org/10.1038/s41467-025-59378-x>
```
@article{mencius_restoring_2025,
	title = {Restoring flowcell type and basecaller configuration from {FASTQ} files of nanopore sequencing data},
	volume = {16},
	issn = {2041-1723},
	url = {https://doi.org/10.1038/s41467-025-59378-x},
	doi = {10.1038/s41467-025-59378-x},
	abstract = {As nanopore sequencing has been widely adopted, data accumulation has surged, resulting in over 700,000 public datasets. While these data hold immense potential for advancing genomic research, their utility is compromised by the absence of flowcell type and basecaller configuration in about 85\% of the data and associated publications. These parameters are essential for many analysis algorithms, and their misapplication can lead to significant drops in performance. To address this issue, we present LongBow, designed to infer flowcell type and basecaller configuration directly from the base quality value patterns of FASTQ files. LongBow has been tested on 66 in-house basecalled FAST5/POD5 datasets and 1989 public FASTQ datasets, achieving accuracies of 95.33\% and 91.45\%, respectively. We demonstrate its utility by reanalyzing nanopore sequencing data from the COVID-19 Genomics UK (COG-UK) project. The results show that LongBow is essential for reproducing reported genomic variants and, through a LongBow-based analysis pipeline, we discovered substantially more functionally important variants while improving accuracy in lineage assignment. Overall, LongBow is poised to play a critical role in maximizing the utility of public nanopore sequencing data, while significantly enhancing the reproducibility of related research.},
	number = {1},
	journal = {Nature Communications},
	author = {Mencius, Jun and Chen, Wenjun and Zheng, Youqi and An, Tingyi and Yu, Yongguo and Sun, Kun and Feng, Huijuan and Feng, Zhixing},
	month = may,
	year = {2025},
	pages = {4102},
}
```

Project maintained by [JMencius](https://github.com/JMencius) and [Checunmily](https://github.com/Checunmily)
