<!--Song ReadMe-->

<br />

<p align="center"><a href="https://www.overture.bio/" target="_blank"><img src="Overture_logo.png" width="66%"></a></p>

<br />

<!-- Replace slack with discourse once setup -->

[<img src="https://img.shields.io/badge/chat-on--slack-blue">](http://slack.overture.bio) 
[<img src="https://img.shields.io/badge/License-gpl--v3.0-blue">](https://github.com/overture-stack/song/blob/develop/LICENSE)

## Worry Less Science More

In this Overture repository, we (the [OICR Genome Informatics Team](https://softeng.oicr.on.ca/team/)) develop the [Song](https://www.overture.bio/products/song/) metadata tracking & validation microservice. 

[Overture](https://www.overture.bio/) is an ensemble of open-source, modular solutions for big-data genomic science. Our core products work in concert to manage, explore and visualize molecular and clinical data. Visit our [website](https://www.overture.bio/) for more information on what Overture offers, and check out our other projects on [GitHub](https://github.com/overture-stack/).

## Song - Reliable Metadata Tracking & Validation


<img align="left" width="22%" alt="Reliable Metadata Tracking & Validation" src="song-padded.png">

Song is responsible for evaluating file information, assigning unique global identifiers, and determining open versus controlled file access permissions. 

<!--State the problem-->

Data is constantly evolving. With the falling cost of sequencing, research organizations are producing enormous multi-omics data sets. Along with this molecular data comes a growing amount of matched clinical data, such as patient records, histology images, and radiographic imagery. The rapid evolution of molecular and clinical data is outpacing efforts to manage, standardize and unify metadata. Tethered with the geographical distribution of data this lack of conformity serves as a major barrier to collaboration and interoperability. 

<!--State our solution-->

Song provides a metadata management and storage system to easily track and manage files in a secure and validated environment, against your established data model. Some features are particularly tailored towards genomic files, but Song supports any data type.

> <br/>

> **In conjunction with the data upload tool [Score](https://github.com/overture-stack/SCORE), Song provides:**
>|||
>|---|---|
>|Metadata to File Validation| Validation of file, assignment of global identifiers for >data management, assignment of access control permissions.|
>|Data Lifecycle Management|Store metadata and files as ```PUBLISHED``` (searchable & downloadable), ```UNPUBLISHED``` (searchable), or ```SUPPRESSED``` (unavailable for search and download)|
>|Flexible Data Model|Built to be flexible for any type of data model using [Dynamic Schemas](https://www.overture.bio/documentation/song/user-guide/schema/)|
><br />


 
 Song uses Dynamic JSON Schema to validate submitted metadata. Schemas can be extended to include additional attributes to describe the donor, bio-specimen, sample, analysis and file. On submission, metadata is validated against the schema for instant feedback on syntactic and semantic correctness. Schemas are versioned for provenance. This ability to update and extend metadata schemas is pivotal as projects evolve over time and new data types and attributes are collected. Flexibility does come with interoperability tradeoffs, thus some standardized vocabularies or data harmonization will be required to federate multiple data platforms. Song greatly increases the quality and scientific value of the submitted data.

<!--Quantitative results for this?-->
<!--Provide a brief outline of how/what we do to reach this solution-->
<!--Where has it been used-->

## Related Products 

<p align="left" ><img alt="Overture overview" src="https://www.overture.bio/static/124ca0fede460933c64fe4e50465b235/a6d66/system-diagram.png"></p>

<!--swap score for song--->

Song allows data producers to submit, validate, and store metadata associated with files managed by Score. [Score](https://github.com/overture-stack/SCORE) is a companion file transfer and object storage management application that focuses on governing data uploads and downloads.

Song is also built to natively integrate with [Maestro](https://github.com/overture-stack/Maestro), which will easily index data into a configurable Elasticsearch index, to be used for convenient searching of data.

Overtures' modular architecture allows you to utilize and mix any of our products to fulfill your individual needs. Our core technologies, however, can also work in concert as an end-to-end data management system (DMS) designed to satisfy the needs of modern large-scale genomic research. For more information on our DMS, please see our [DMS documentation](https://www.overture.bio/documentation/dms/).

> <br/>
> See the links below for additional information on our other modular solutions:
>
>|Product|Description|
>|---|---|
>|[Ego](https://www.overture.bio/products/ego/)|A stateless authorization and user management service|
>|[Score](https://www.overture.bio/products/score/)| Transfer data quickly and easily to and from any cloud-based storage system|
>|[Song](https://www.overture.bio/products/song/)|Quickly and reliably track genome metadata scattered across multiple Cloud storage systems|
>|[Maestro](https://www.overture.bio/products/maestro/)|Organizing your distributed data into one index|
>|[Arranger](https://www.overture.bio/products/arranger/)|Organize an intuitive data search interface, complete with customizable components, tables, and search terms|
> <br/>

## Table of Contents

- [Quick Start](#quickstart)
- [Setup](#setup)
- [Usage](#usage)
- [Contribution](#how-to-contribute)
- [Feedback](#feedback)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Quick Start

## Setup

Please see the documentation linked below:

- [Installation](https://www.overture.bio/documentation/song/installation/installation/)
- [Configuration](https://www.overture.bio/documentation/song/installation/configuration/)
- [Authentication](https://www.overture.bio/documentation/song/installation/authentication/)

## Usage

Please see the documentation linked below:

- [Dynamic Schemas & Managing Schemas](https://www.overture.bio/documentation/song/user-guide/schema/)
- [Analysis Management & Submitting Data](https://www.overture.bio/documentation/song/user-guide/analysis/)

## Contribute

* [Making a Contribution](CONTRIBUTING.md)
* [Filing an issue](https://github.com/overture-stack/song/issues)

## Feedback

* Connect with us on [Slack](http://slack.overture.bio)
* [Upvote](https://github.com/overture-stack/song/issues?q=is%3Aopen+is%3Aissue+label%3Anew-feature+sort%3Areactions-%2B1-desc) feature requests

## Code of Conduct

&emsp; [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## License

Licensed under the [GNU Lesser General Public License v3.0](LICENSE.txt) license.
