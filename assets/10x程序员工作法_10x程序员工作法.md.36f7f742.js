import{_ as i,o as a,c as e,S as o}from"./chunks/framework.d5a27ec8.js";const b=JSON.parse('{"title":"10x程序员工作法","description":"","frontmatter":{},"headers":[],"relativePath":"10x程序员工作法/10x程序员工作法.md","filePath":"10x程序员工作法/10x程序员工作法.md","lastUpdated":1715150390000}'),t={name:"10x程序员工作法/10x程序员工作法.md"};function p(u,l,r,c,h,s){return a(),e("div",null,l[0]||(l[0]=[o('<h1 id="_10x程序员工作法" tabindex="-1">10x程序员工作法 <a class="header-anchor" href="#_10x程序员工作法" aria-label="Permalink to &quot;10x程序员工作法&quot;">​</a></h1><h2 id="以终为始" tabindex="-1">以终为始 <a class="header-anchor" href="#以终为始" aria-label="Permalink to &quot;以终为始&quot;">​</a></h2><blockquote><p>💡面对</p><ul><li>不明确的需求是否合理：精益创业思维</li><li>做任务之前：先推演一番 <ul><li>明确的需求是否完成：验收标准</li><li>上级的任务是否完成：DoD</li></ul></li><li>难以解决的问题：不妨跳出程序员思维</li><li>一个新的项目：迭代0准备 &lt;/aside&gt;</li></ul></blockquote><h3 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h3><blockquote><p>💡以终为始，就是在做事情之前，先想想结果是什么样子的？然后根据结果来确定要做的事情。</p></blockquote><p>这个结果就是：</p><ul><li>别人会怎么用我做的东西？</li><li>东西做好后，上线流程是怎样的？</li></ul><p>以始为终的实践：</p><ul><li>测试驱动开发</li><li>持续集成</li></ul><h3 id="终-到底在哪里" tabindex="-1">“终”到底在哪里？ <a class="header-anchor" href="#终-到底在哪里" aria-label="Permalink to &quot;“终”到底在哪里？&quot;">​</a></h3><blockquote><p>💡做任何事之前，先定义完成的标准。</p></blockquote><p>完成什么程度才能算终？</p><p>如何弥补双方理解的差异？</p><p>最佳实践：DoD（Define of done），开始工作前，先制定DoD</p><blockquote><p>比如：“开发完成”，表示开发人员编写好功能代码，编写好单元测试代码，编写好集成测试代码，测试可以通过，代码通过了代码风格检查、测试覆盖率检查。</p></blockquote><p>如何制定DoD：</p><p>一个个实际可检查的检查项</p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 编写代码</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 编写测试代码</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 通过测试人员验收</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> ……</li></ul><p>扩展DoD思维：</p><blockquote><p>💡DoD是种思维模式，是一种尽可能消除不确定性，达成共识的方式。</p></blockquote><ul><li>某个功能的 DoD，比如：这个功能特性已经开发完成，经过产品负责人的验收，处于一个可部署的状态。</li><li>一个迭代的DOD，比如：这个迭代规划的所有功能己经完成。</li><li>一次发布的DOD，比如：整个软件处于可发布的状态，上线计划已经明确。</li><li>一个接口的定义。比如，返回值是否相同，使用方是否可以配合使用</li><li>……</li></ul><h3 id="验收标准" tabindex="-1">验收标准 <a class="header-anchor" href="#验收标准" aria-label="Permalink to &quot;验收标准&quot;">​</a></h3><p>一个合理需求完成的DoD就是“验收标准”。</p><blockquote><p>💡验收标准，可以清晰定义出需求的边界。</p></blockquote><p>采用用户故事之后，我经常在写完了主要流程之后，再去看一下验收标准，为自己的开发查缺补漏。因为我知道，那是标准，达不成就不算任务完成。</p><p>当我们说自己开发完成，可以交给测试人员测试时，我们需要照着验收标准给测试人员演示一遍，证明我们的系统确实能够跑通。这之后，测试人员才会把系统接手过去，做更系统测试。</p><blockquote><p>💡或许你会有这样的疑问，如果产品经理通过用户故事的方式，将需求实现细节都描绘得清清楚楚，那我们程序员的发挥空间在哪里？请注意，验收标准所给出实现细节应该是业务上的，程序员在这种问题上思考才是真正意义上的浪费时间，我们的发挥空间应该是在技术实现上。</p></blockquote><h3 id="持续集成" tabindex="-1">持续集成 <a class="header-anchor" href="#持续集成" aria-label="Permalink to &quot;持续集成&quot;">​</a></h3><p>现在假设“验收标准”已经制定清楚，是不是按照验收标准写完代码，工作就算完成了？或者这样说，“代码是技术团队的交付物吗？”</p><blockquote><p>写代码是程序员的职责，但我们更有义务交付一个可运行的软件。</p></blockquote><blockquote><p>💡尽早提交代码去集成。</p></blockquote><p>怎样尽早呢？你需要懂得任务分解，这是我们在之后的“任务分解”主题下会讲到。</p><h3 id="面对不确定的需求-如何需求探索" tabindex="-1">面对不确定的需求？如何需求探索 <a class="header-anchor" href="#面对不确定的需求-如何需求探索" aria-label="Permalink to &quot;面对不确定的需求？如何需求探索&quot;">​</a></h3><p>（比如敏捷开发中的探索周）</p><p>最佳实践：精益创业 ，尽可能少浪费的前提下，面向不确定性创造新事物。</p><p>既然是新事物，就要尝试，但是要用最小的成本去试，也就是：少花钱，多办事。</p><p>有了框架结构，我们的生活就简单了，当产品经理要做一个新产品或是产品的一个新特性，我们就可以用精益创业的这几个概念来检验一下产品经理是否想清楚了。</p><p>比如，你要做这个新的产品特性，</p><ul><li>你要验证的东西是什么呢？</li><li>他要验证的目标是否有数据可以度量呢？</li><li>要解决的这个问题是不是当前最重要的事情，</li><li>是否还有其他更重要的问题呢？</li></ul><p>如果上面的问题都得到肯定的答复，那么</p><ul><li>验证这个目标是否有更简单的解决方案？</li><li>是不是定要通过开发一个产品特性来实现呢？</li></ul><h3 id="项目负责人的-降维打击" tabindex="-1">项目负责人的“降维打击” <a class="header-anchor" href="#项目负责人的-降维打击" aria-label="Permalink to &quot;项目负责人的“降维打击”&quot;">​</a></h3><p>对比组长来说，你在项目里打杂，你只能关注到一个具体的任务，而项目主力心目中是整个系统。虽然写的代码都一样，但你看到的是树木，人家看到的是森林，他更能从全局思考。</p><blockquote><p>不同角色工作上真正的差异是上下文的不同。</p></blockquote><p>跳出程序员的角色思维，扩大自己的工作上下文。</p><ul><li>虽然我不是项目主力，但不妨碍我去更深入地了解系统全貌；</li><li>虽然我不是项目负责人，但不妨碍我去了解系统与其他组的接口；</li><li>同样，虽然我不是项目经理，但我可以去了解一下项目经理是怎样管理项目的；</li><li>虽然我不是产品经理，但了解一个产品的设计方法对我来说也是有帮助的。</li></ul><p>当你对软件开发的全生命周期都有了认识之后，你看到的就不再是一个点了，而是一条线。与别人讨论问题的时候，你就会有更多的底气，与那些只在一个点上思考的人相比，你就拥有了降维攻击的能力。</p><p>现在你知道为什么你的工作总能让老板挑出毛病了吧！没错，工作的上下文不同，看到的维度差异很大。单一维度的思考，在多维度思考者的眼里几乎就是漏洞百出的。</p><h3 id="动手之前-先推演一番" tabindex="-1">动手之前，先推演一番 <a class="header-anchor" href="#动手之前-先推演一番" aria-label="Permalink to &quot;动手之前，先推演一番&quot;">​</a></h3><blockquote><p>这一章是李淼之前说好的问题，做一项任务，要考虑到后期兼容性，可能会出现的问题，以及应对措施。</p></blockquote><p>不要只想着功能实现，还要考虑上线可能出现的问题。比如，和第三方配合可能出现什么问题？</p><p>执行过程：</p><ul><li>先从结果的角度入手，看看最终上线要考虑哪些因素。</li><li>推演出一个可以一步一步执行的上线方案，用前面考虑到的因素作为衡量指标。</li><li>根据推演出来的上线方案，总结要做的任务</li></ul><p>思维拓展：</p><ul><li>在做一个产品之前，先来推演一下这个产品如何推广，通过什么途径推广给什么样的人；</li><li>在做技术改进之前，先来考虑一下上线是怎样一个过程，为可能出现的问题准备预案；</li><li>在设计一个产品特性之前，先来考虑数据由谁提供，完整的流程是什么样的。</li></ul><h3 id="给个数字看看" tabindex="-1">给个数字看看 <a class="header-anchor" href="#给个数字看看" aria-label="Permalink to &quot;给个数字看看&quot;">​</a></h3><p>你的工作是否可以用数字衡量？</p><p>产品中是否可以加入一些监控指标？</p><h3 id="迭代0" tabindex="-1">迭代0 <a class="header-anchor" href="#迭代0" aria-label="Permalink to &quot;迭代0&quot;">​</a></h3><p>清单：</p><ul><li>需求方面 <ul><li>迭代1需求列表</li><li>用户界面和交互逻辑</li></ul></li><li>技术方面 <ul><li>技术选型，技术架构，框架，数据库等</li><li>持续集成 <ul><li>编译打包</li><li>代码风格检查</li><li>测试覆盖率 <ul><li>单元测试</li><li>集成测试</li></ul></li><li><strong>继承失败的提示</strong></li><li>……</li></ul></li></ul></li><li>发布准备 <ul><li>数据库迁移</li><li>自动化部署或者发布</li></ul></li></ul><h2 id="任务分解" tabindex="-1">任务分解 <a class="header-anchor" href="#任务分解" aria-label="Permalink to &quot;任务分解&quot;">​</a></h2><blockquote><p>💡开发任务分解</p><ul><li>先梳理好任务优先级。</li><li>然后，开发应该写测试，保证自己代码质量，也就是TDD理念。</li><li>而做好TDD需要做好任务分解。</li><li>而任务分解的关键，是每个任务你是否清晰的知道该做什么，而且做完就可以提交</li><li>那么，测试怎么写？</li></ul></blockquote><blockquote><p>💡需求的分解</p><ul><li>原则：粒度越小越好。 </li></ul></blockquote><blockquote><p>💡不确定需求的分解：</p><ul><li>最佳实践：MVP最小可行产品</li></ul></blockquote><h3 id="概念-1" tabindex="-1">概念 <a class="header-anchor" href="#概念-1" aria-label="Permalink to &quot;概念&quot;">​</a></h3><p>分而治之的理念。</p><p>要点：</p><blockquote><p>💡任务分解的粒度</p><ul><li>需要你清楚每一步需要做什么，应该怎么做了。</li><li>每做完一个任务，代码都是可以提交的 </li></ul></blockquote><h3 id="程序员应该做测试吗" tabindex="-1">程序员应该做测试吗？ <a class="header-anchor" href="#程序员应该做测试吗" aria-label="Permalink to &quot;程序员应该做测试吗？&quot;">​</a></h3><blockquote><p>💡尽早发现问题。能从需求上解决的问题，就不要到开发阶段。同样，在开发阶段能解决的问题，就不要留到测试阶段。</p></blockquote><p>自动化测试</p><ul><li>单元测试</li><li>集成测试</li><li>系统测试</li></ul><p>随着人们对于测试理解的加深，各种各样的测试都出现了，也开始有了测试的分类：单元测试、集成测试、系统测试等等。越在底层测试，成本越低，执行越快；越在高层测试，成本越高，执行越慢。</p><p>所以，多写单元测试。</p><h3 id="测试驱动开发tdd" tabindex="-1">测试驱动开发TDD <a class="header-anchor" href="#测试驱动开发tdd" aria-label="Permalink to &quot;测试驱动开发TDD&quot;">​</a></h3><p>先写测试，后写代码。代码通过后进行重构。</p><p>也就是“红——绿——重构”的过程，重构就是消除代码怪味道的过程。</p><p>如何做？</p><p>需要编写具有可测试性的代码。</p><h3 id="任务分解足够小" tabindex="-1">任务分解足够小 <a class="header-anchor" href="#任务分解足够小" aria-label="Permalink to &quot;任务分解足够小&quot;">​</a></h3><p>为什么任务分解对于 TDD 如此重要呢？</p><p>因为只有当任务拆解得足够小了，你才能知道怎么写测试。</p><h3 id="测试怎么写" tabindex="-1">测试怎么写？ <a class="header-anchor" href="#测试怎么写" aria-label="Permalink to &quot;测试怎么写？&quot;">​</a></h3><blockquote><p>💡测试要足够简单，简单到这个测试本身不会出错。</p></blockquote><p>测试的基本结构：前置准备、执行、断言和清理</p><p>一些常见的测试“坏味道”：做了太多事的测试，没有断言的测试，还有一种看一眼就知道有问题的“坏味道”测试里有判断语句。</p><h3 id="砍-需求" tabindex="-1">“砍”需求 <a class="header-anchor" href="#砍-需求" aria-label="Permalink to &quot;“砍”需求&quot;">​</a></h3><p>有时候一个需求产品说一定要做的话，可以把分解需求后再“砍”。比如登录需求，就可以把手机验证码需求砍掉。</p><blockquote><p>💡需求分解的原则：粒度越小越好。</p></blockquote><p>分解后的需求标准：</p><ul><li>独立的</li><li>可协商的</li><li>有价值的</li><li>可估算的</li><li>小：需求估算</li><li>可测试的</li></ul><h3 id="任务优先级" tabindex="-1">任务优先级 <a class="header-anchor" href="#任务优先级" aria-label="Permalink to &quot;任务优先级&quot;">​</a></h3><ul><li>默认所有需求都不做，直到弄清楚为什么要做这件事</li><li>四象限法则</li></ul><h3 id="最小可行产品mvp" tabindex="-1">最小可行产品MVP <a class="header-anchor" href="#最小可行产品mvp" aria-label="Permalink to &quot;最小可行产品MVP&quot;">​</a></h3><p><strong>最小的代价：</strong></p><p>能不做的事情就不做，能简化的就简化。因为我们只是为了验证一个想法可行性，并不是为了开发一个软件。</p><p><strong>可行的路径</strong></p><p>可行的路径，是一条完整的用户体验路径，至少在用户眼中是这样的。我们常常会想给客户一个完整的系统，但在时间有限的情況下，我们必须学会分解。</p>',99)]))}const d=i(t,[["render",p]]);export{b as __pageData,d as default};
