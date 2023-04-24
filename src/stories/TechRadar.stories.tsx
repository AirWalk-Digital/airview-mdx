import React from 'react';
import { TechRadar } from './TechRadar';
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof TechRadar> = {
  title: 'Visualisation/TechRadar',
  component: TechRadar,
  tags: ['autodocs'],
  excludeStories: /.*Data$/, // 👈 Storybook ignores anything that contains Data
};
export default meta;

// myObject={JSON.stringify(myObject)}
type Story = StoryObj<typeof TechRadar>;

const data_quadrants=  [
  { name: "Languages" },
  { name: "Infrastructure" },
  { name: "Datastores" },
  { name: "Data Management" },
]

const data_rings = [
  { name: "ADOPT", color: "#5ba300" },
  { name: "TRIAL", color: "#009eb0" },
  { name: "ASSESS", color: "#c7ba00" },
  { name: "HOLD", color: "#e09b96" },
]

export const data_entriesData = [
  {
    quadrant: 3,
    ring: 2,
    label: "AWS Athena",
    active: true,
    moved: 0,
  },
  {
    quadrant: 3,
    ring: 3,
    label: "AWS Data Pipeline",
    active: true,
    moved: 0,
  },
]

// storiesOf('TechRadar', module)
//   .add('with JSON object', () => <TechRadar data_entries={data_entries} />);


// const ComponentStory = (args) => <TechRadar {...args} />;

// export const Default = ComponentStory.bind({});
export const Default: Story = (args) => {
  const {
    title,
    print_layout,
    links_in_new_tabs,
    data_quadrants,
    data_rings,
    data_entries,
  } = args;

  const data = {
    title,
    print_layout,
    links_in_new_tabs,
    data_quadrants,
    data_rings,
    data_entries: JSON.stringify(data_entries),
  };
console.log('data: ', data)
debugger;
  return <TechRadar {...data} />;
};

// export const Default: Story = (args) => {
//   return {
//       props: args,
//       template: `<component [data]="data"/>`,
//   }
// };
// export const Default: Story = {
//   args: {
  Default.args = {
    title: "Tech Radar",
    print_layout: true,
    links_in_new_tabs: true,
    data_quadrants: [
      { name: "Languages" },
      { name: "Infrastructure" },
      { name: "Datastores" },
      { name: "Data Management" },
    ],
    data_rings: [
      { name: "ADOPT", color: "#5ba300" },
      { name: "TRIAL", color: "#009eb0" },
      { name: "ASSESS", color: "#c7ba00" },
      { name: "HOLD", color: "#e09b96" },
    ],
    data_entries: [
      {
        quadrant: 3,
        ring: 2,
        label: "AWS Athena",
        active: true,
        moved: 0,
      },
      {
        quadrant: 3,
        ring: 3,
        label: "AWS Data Pipeline",
        active: true,
        moved: 0,
      },
    ],
  }
  
  Default.argTypes = {
    data_quadrants: {
      control: { type: "object" },
    },
    data_rings: {
      control: { type: "object" },
    },
    data_entries: {
      control: { type: "object" },
    },
  };

  export const InputFieldBig = () => <TechRadar data_entries={data_entriesData} data_test='test' />


// export const Complex = ComponentStory.bind({});
// Complex.args = {
//   title: "Tech Radar",
//   print_layout: true,
//   links_in_new_tabs: true,
//   data: {
//     quadrants: [
//       { name: "Languasssges" },
//       { name: "Infrastructure" },
//       { name: "Datastores" },
//       { name: "Data Management" },
//     ],
//     rings: [
//       { name: "ADOPT", color: "#5ba300" },
//       { name: "TRIAL", color: "#009eb0" },
//       { name: "ASSESS", color: "#c7ba00" },
//       { name: "HOLdD", color: "#e09b96" }
//     ],
//     entries: [
//       {
//         "quadrant": 3,
//         "ring": 2,
//         "label": "AWS Athena",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 3,
//         "label": "AWS Data Pipeline",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 0,
//         "label": "AWS EMR",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 2,
//         "label": "AWS Glue",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 0,
//         "label": "Airflow",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 0,
//         "label": "Databricks",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 1,
//         "label": "Flink",
//         "link": "https://engineering.zalando.com/tags/apache-flink.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 1,
//         "label": "Google BigQuery",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 3,
//         "label": "Hadoop",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 1,
//         "label": "Presto",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 0,
//         "label": "Spark",
//         "link": "https://engineering.zalando.com/tags/apache-spark.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 3,
//         "label": "YARN",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 2,
//         "label": "dbt",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 0,
//         "label": "AWS DynamoDB",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 0,
//         "label": "AWS S3",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 3,
//         "label": "Aerospike",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 2,
//         "label": "Amazon MemoryDB",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 1,
//         "label": "Amazon Redshift",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 1,
//         "label": "Amazon Feature Store",
//         "active": true,
//         "moved": 1
//       },
//       {
//         "quadrant": 2,
//         "ring": 3,
//         "label": "Apache Cassandra",
//         "link": "https://engineering.zalando.com/tags/cassandra.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 3,
//         "label": "Consul",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 3,
//         "label": "CouchBase",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 1,
//         "label": "Druid",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 0,
//         "label": "Elasticsearch",
//         "link": "https://engineering.zalando.com/tags/elasticsearch.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 0,
//         "label": "Exasol",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 3,
//         "label": "HBase",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 1,
//         "label": "HDFS",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 3,
//         "label": "Hazelcast",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 3,
//         "label": "Memcached",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 3,
//         "label": "MongoDB",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 3,
//         "label": "MySQL",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 3,
//         "label": "Oracle DB",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 0,
//         "label": "PostgreSQL",
//         "link": "https://engineering.zalando.com/tags/postgresql.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 0,
//         "label": "Redis",
//         "link": "https://engineering.zalando.com/tags/redis.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 2,
//         "label": "RocksDB",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 3,
//         "label": "Solr",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 3,
//         "label": "ZooKeeper",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 2,
//         "ring": 0,
//         "label": "etcd",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 1,
//         "ring": 0,
//         "label": "AWS CloudFormation",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 1,
//         "ring": 0,
//         "label": "AWS CloudFront",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 1,
//         "ring": 1,
//         "label": "AWS Elemental MediaConvert",
//         "active": true,
//         "moved": 1
//       },
//       {
//         "quadrant": 1,
//         "ring": 1,
//         "label": "AWS Lambda",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 1,
//         "ring": 1,
//         "label": "AWS Step Functions",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 1,
//         "ring": 0,
//         "label": "Amazon SageMaker",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 1,
//         "ring": 0,
//         "label": "Docker",
//         "link": "https://engineering.zalando.com/tags/docker.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 1,
//         "ring": 0,
//         "label": "Kubernetes",
//         "link": "https://engineering.zalando.com/tags/kubernetes.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 1,
//         "ring": 0,
//         "label": "OpenTracing",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 1,
//         "ring": 3,
//         "label": "STUPS",
//         "link": "https://engineering.zalando.com/tags/stups.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 1,
//         "ring": 0,
//         "label": "Skipper",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 1,
//         "ring": 2,
//         "label": "Slurm",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 1,
//         "ring": 2,
//         "label": "WebAssembly",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 1,
//         "ring": 3,
//         "label": "ZMON",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 3,
//         "label": "Clojure",
//         "link": "https://engineering.zalando.com/tags/clojure.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 1,
//         "label": "Dart",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 0,
//         "label": "Go",
//         "link": "https://engineering.zalando.com/tags/golang.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 0,
//         "label": "GraphQL",
//         "link": "https://engineering.zalando.com/tags/graphql.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 3,
//         "label": "Haskell",
//         "link": "https://engineering.zalando.com/tags/haskell.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 0,
//         "label": "Java",
//         "link": "https://engineering.zalando.com/tags/java.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 0,
//         "label": "JavaScript",
//         "link": "https://engineering.zalando.com/tags/javascript.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 0,
//         "label": "Kotlin",
//         "link": "https://engineering.zalando.com/tags/kotlin.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 0,
//         "label": "OpenAPI (Swagger)",
//         "link": "https://engineering.zalando.com/tags/openapi.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 0,
//         "label": "Python",
//         "link": "https://engineering.zalando.com/tags/python.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 2,
//         "label": "R",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 3,
//         "label": "Rust",
//         "link": "https://engineering.zalando.com/tags/rust.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 0,
//         "label": "Scala",
//         "link": "https://engineering.zalando.com/tags/scala.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 0,
//         "label": "Swift",
//         "link": "https://engineering.zalando.com/tags/swift.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 0,
//         "ring": 0,
//         "label": "TypeScript",
//         "link": "https://engineering.zalando.com/tags/typescript.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 0,
//         "label": "AWS Kinesis",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 0,
//         "label": "AWS SNS",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 0,
//         "label": "AWS SQS",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 0,
//         "label": "Kafka",
//         "link": "https://engineering.zalando.com/tags/apache-kafka.html",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 0,
//         "label": "Nakadi",
//         "link": "https://nakadi.io",
//         "active": true,
//         "moved": 0
//       },
//       {
//         "quadrant": 3,
//         "ring": 1,
//         "label": "RabbitMQ",
//         "link": "https://engineering.zalando.com/tags/rabbitmq.html",
//         "active": true,
//         "moved": 0
//       }
//     ]
//   }
// }

// Complex.argTypes = {
//   // data: { table: { expanded: true } }
//   // data: {
//   //   options: ['Simple', 'Complex'],
//   //   mapping: {
//   //     Simple: dummyData,
//   //     Complex: dummyData,
//   //   },
//   // }
//   data: {
//     name: "TechRadar Data",
//     control: { type: "object" },
//   }
// }
